import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./config";

const headerRef = (systemId: string) => ref(storage, `system-card-headers/${systemId}/header`);
const moduleImageRef = (moduleId: string) => ref(storage, `module-images/${moduleId}/cover`);

export async function uploadSystemHeader(systemId: string, file: File): Promise<string> {
  const fileRef = headerRef(systemId);
  await uploadBytes(fileRef, file, {
    contentType: file.type,
    cacheControl: "public,max-age=3600",
    customMetadata: { systemId },
  });
  const url = await getDownloadURL(fileRef);
  return `${url}${url.includes("?") ? "&" : "?"}v=${Date.now()}`;
}

export async function deleteSystemHeader(systemId: string): Promise<void> {
  try {
    await deleteObject(headerRef(systemId));
  } catch (error) {
    if ((error as { code?: string }).code !== "storage/object-not-found") throw error;
  }
}

export async function uploadModuleImage(moduleId: string, file: File): Promise<string> {
  const fileRef = moduleImageRef(moduleId);
  await uploadBytes(fileRef, file, {
    contentType: file.type,
    cacheControl: "public,max-age=3600",
    customMetadata: { moduleId },
  });
  const url = await getDownloadURL(fileRef);
  return `${url}${url.includes("?") ? "&" : "?"}v=${Date.now()}`;
}
