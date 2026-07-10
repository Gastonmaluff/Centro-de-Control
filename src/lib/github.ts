import type { GitInfo } from "../data/types";

/**
 * Obtiene el último commit de un repositorio PÚBLICO de GitHub desde el
 * navegador (la API pública de GitHub permite CORS y no requiere token para
 * repos públicos; límite ~60 req/hora por IP).
 *
 * Repos privados, workflows y deploys requieren token → backend (Etapa 2).
 */

/** Acepta "owner/repo", "https://github.com/owner/repo(.git)", "git@github.com:owner/repo.git". */
export function parseRepo(input?: string): { owner: string; repo: string } | null {
  if (!input) return null;
  const s = input.trim();
  const m =
    s.match(/github\.com[/:]([^/]+)\/([^/#?]+?)(?:\.git)?(?:[/#?].*)?$/i) ||
    s.match(/^([^/\s]+)\/([^/\s#?]+?)(?:\.git)?$/);
  if (!m) return null;
  return { owner: m[1], repo: m[2] };
}

export async function fetchLastCommit(githubInput?: string): Promise<GitInfo> {
  const parsed = parseRepo(githubInput);
  const checkedAt = new Date().toISOString();
  if (!parsed) {
    return { connected: false, source: "github", checkedAt, error: "Repo no reconocido" };
  }
  const { owner, repo } = parsed;
  try {
    const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!repoRes.ok) {
      const msg = repoRes.status === 404 ? "Repo no encontrado o privado" : `HTTP ${repoRes.status}`;
      return { connected: false, source: "github", checkedAt, error: msg };
    }
    const repoData = await repoRes.json();
    const branch: string = repoData.default_branch ?? "main";

    const commitsRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?sha=${encodeURIComponent(branch)}&per_page=1`,
      { headers: { Accept: "application/vnd.github+json" } }
    );
    if (!commitsRes.ok) {
      return { connected: false, source: "github", checkedAt, branch, error: `HTTP ${commitsRes.status}` };
    }
    const commits = await commitsRes.json();
    const c = Array.isArray(commits) ? commits[0] : null;
    if (!c) return { connected: true, source: "github", checkedAt, branch, error: "Sin commits" };

    return {
      connected: true,
      source: "github",
      checkedAt,
      branch,
      sha: (c.sha as string)?.slice(0, 7),
      message: (c.commit?.message as string)?.split("\n")[0]?.slice(0, 120),
      author: c.commit?.author?.name ?? c.author?.login,
      date: c.commit?.author?.date,
    };
  } catch (e) {
    return {
      connected: false,
      source: "github",
      checkedAt,
      error: e instanceof Error ? e.message : "Error de red",
    };
  }
}
