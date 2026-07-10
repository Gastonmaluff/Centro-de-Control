import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/config";
import type { ActivityItem, Charge, System, Todo } from "../data/types";

/**
 * Subscribes to a Firestore collection and returns its documents in real time.
 * No demo/seed fallback: an empty collection returns an empty array. This keeps
 * the panel honest — it only ever shows data that actually exists in Firestore.
 */
function useCollection<T>(name: string): { data: T[]; loading: boolean } {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      query(collection(db, name)),
      (snap) => {
        setData(snap.docs.map((d) => ({ id: d.id, ...d.data() })) as T[]);
        setLoading(false);
      },
      () => {
        setData([]);
        setLoading(false);
      }
    );
    return unsub;
  }, [name]);

  return { data, loading };
}

export function useSystems() {
  return useCollection<System>("systems");
}
export function useCharges() {
  return useCollection<Charge>("charges");
}
export function useActivity() {
  return useCollection<ActivityItem>("activity");
}

/** Pendientes de un sistema (subcolección systems/{id}/todos). */
export function useTodos(systemId: string | null): { data: Todo[]; loading: boolean } {
  const [data, setData] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!systemId) {
      setData([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const unsub = onSnapshot(
      query(collection(db, "systems", systemId, "todos")),
      (snap) => {
        setData(snap.docs.map((d) => ({ id: d.id, ...d.data() })) as Todo[]);
        setLoading(false);
      },
      () => {
        setData([]);
        setLoading(false);
      }
    );
    return unsub;
  }, [systemId]);

  return { data, loading };
}
