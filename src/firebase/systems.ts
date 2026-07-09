import { addDoc, collection, deleteDoc, doc, setDoc, writeBatch } from "firebase/firestore";
import { db } from "./config";
import type { SystemCardData } from "../data/types";
import { SYSTEMS } from "../data/seed";

/** All the editable fields of a system (everything except the Firestore id). */
export type SystemInput = Omit<SystemCardData, "id">;

const COL = "systems";

/** Creates a new system document with an auto-generated id. */
export async function createSystem(data: SystemInput): Promise<void> {
  await addDoc(collection(db, COL), data);
}

/** Overwrites an existing system document. */
export async function updateSystem(id: string, data: SystemInput): Promise<void> {
  await setDoc(doc(db, COL, id), data);
}

/** Deletes a system document. */
export async function deleteSystem(id: string): Promise<void> {
  await deleteDoc(doc(db, COL, id));
}

/** Seeds the six example systems into Firestore (one click "importar ejemplos"). */
export async function importExampleSystems(): Promise<void> {
  const batch = writeBatch(db);
  for (const sys of SYSTEMS) {
    const { id, ...rest } = sys;
    batch.set(doc(db, COL, id), rest);
  }
  await batch.commit();
}
