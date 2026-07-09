// Seeds Firestore with the dashboard's example data.
//
// Usage (from the project root):
//   SEED_EMAIL=you@mail.com SEED_PASSWORD=yourpass npm run seed
//
// It signs in with an existing Email/Password account (create one from the app's
// register screen first), then writes the `systems`, `charges` and `activity`
// collections. Reads/writes are allowed only for authenticated users, matching
// firestore.rules.

import { readFileSync } from "node:fs";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, writeBatch } from "firebase/firestore";

// --- load .env.local -------------------------------------------------------
const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split("\n")
    .filter((l) => l.trim() && !l.startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
};

const { SEED_EMAIL, SEED_PASSWORD } = process.env;
if (!SEED_EMAIL || !SEED_PASSWORD) {
  console.error("Set SEED_EMAIL and SEED_PASSWORD env vars (an existing account).");
  process.exit(1);
}

// --- data (kept in sync with src/data/seed.ts) -----------------------------
const { SYSTEMS, CHARGES, ACTIVITY } = await import("./seed-data.mjs");

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

await signInWithEmailAndPassword(auth, SEED_EMAIL, SEED_PASSWORD);
console.log("Signed in as", SEED_EMAIL);

async function seed(name, items) {
  const batch = writeBatch(db);
  for (const item of items) batch.set(doc(db, name, item.id), item);
  await batch.commit();
  console.log(`Seeded ${items.length} docs into "${name}"`);
}

await seed("systems", SYSTEMS);
await seed("charges", CHARGES);
await seed("activity", ACTIVITY);

console.log("Done.");
process.exit(0);
