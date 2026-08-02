import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./config";
import type { Module } from "../data/types";

export type ModuleInput = Omit<Module, "id" | "createdAt" | "updatedAt">;
const COL = "modules";

export async function createModule(data: ModuleInput): Promise<string> {
  const now = new Date().toISOString();
  const ref = await addDoc(collection(db, COL), { ...data, createdAt: now, updatedAt: now });
  return ref.id;
}

export async function updateModule(id: string, data: ModuleInput): Promise<void> {
  await setDoc(doc(db, COL, id), { ...data, updatedAt: new Date().toISOString() }, { merge: true });
}

export async function deleteModule(id: string): Promise<void> {
  await deleteDoc(doc(db, COL, id));
}
