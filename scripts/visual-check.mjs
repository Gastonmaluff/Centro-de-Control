import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const host = "127.0.0.1";
const port = 4173;
const baseUrl = `http://${host}:${port}`;
const outputDir = new URL("../output/playwright/", import.meta.url);
const routes = [
  { path: "/", name: "portada" },
  { path: "/admin/reportes", name: "admin-reportes" },
];

await mkdir(outputDir, { recursive: true });

const viteCli = fileURLToPath(new URL("../../bin/vite.js", import.meta.resolve("vite")));
const server = spawn(
  process.execPath,
  [viteCli, "--host", host, "--port", String(port), "--strictPort"],
  { stdio: ["ignore", "pipe", "pipe"] },
);

let serverOutput = "";
server.stdout.on("data", (chunk) => { serverOutput += chunk; });
server.stderr.on("data", (chunk) => { serverOutput += chunk; });

async function waitForServer(timeoutMs = 30_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Vite termino antes de iniciar.\n${serverOutput}`);
    }
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // Vite todavia esta iniciando.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Vite no respondio dentro de ${timeoutMs} ms.\n${serverOutput}`);
}

const results = [];
let browser;

try {
  await waitForServer();
  browser = await chromium.launch({ headless: true });

  for (const route of routes) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errors = [];
    const onConsole = (message) => {
      if (message.type() === "error") errors.push(`console: ${message.text()}`);
    };
    const onPageError = (error) => errors.push(`pageerror: ${error.message}`);
    page.on("console", onConsole);
    page.on("pageerror", onPageError);

    const response = await page.goto(`${baseUrl}${route.path}`, { waitUntil: "networkidle" });
    const screenshot = new URL(`${route.name}.png`, outputDir);
    await page.screenshot({ path: fileURLToPath(screenshot), fullPage: true });
    results.push({
      route: route.path,
      status: response?.status() ?? null,
      title: await page.title(),
      finalUrl: page.url(),
      screenshot: fileURLToPath(screenshot),
      errors,
    });

    page.off("console", onConsole);
    page.off("pageerror", onPageError);
    await page.close();
  }

  await writeFile(new URL("visual-check.json", outputDir), JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
  if (results.some((result) => result.status !== 200 || result.errors.length > 0)) process.exitCode = 1;
} finally {
  await browser?.close();
  if (server.exitCode === null) {
    server.kill();
    await new Promise((resolve) => server.once("exit", resolve));
  }
}
