import { addDoc, collection, deleteDoc, doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./config";
import type { System } from "../data/types";

/** Campos editables de un sistema (todo menos el id de Firestore). */
export type SystemInput = Omit<System, "id" | "createdAt" | "updatedAt">;

const COL = "systems";

/** Crea un sistema nuevo con id autogenerado. Devuelve el id. */
export async function createSystem(data: SystemInput): Promise<string> {
  const ref = await addDoc(collection(db, COL), {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    _createdAt: serverTimestamp(),
  });
  return ref.id;
}

/** Reemplaza un sistema existente conservando createdAt. */
export async function updateSystem(id: string, data: SystemInput): Promise<void> {
  await setDoc(doc(db, COL, id), { ...data, updatedAt: new Date().toISOString() }, { merge: true });
}

/** Actualización parcial (por ejemplo, resultado de monitoreo o git). */
export async function patchSystem(id: string, patch: Partial<System>): Promise<void> {
  await updateDoc(doc(db, COL, id), { ...patch, updatedAt: new Date().toISOString() });
}

/** Elimina un sistema. */
export async function deleteSystem(id: string): Promise<void> {
  await deleteDoc(doc(db, COL, id));
}
