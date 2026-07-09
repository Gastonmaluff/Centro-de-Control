import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/config";
import { ACTIVITY, CHARGES, SYSTEMS } from "../data/seed";
import type { ActivityItem, Charge, SystemCardData } from "../data/types";

/**
 * Subscribes to a Firestore collection and returns its docs. While the
 * collection is empty (fresh project, not seeded yet) it returns the local
 * seed data so the dashboard always renders a complete, realistic view.
 */
function useCollection<T>(name: string, fallback: T[]): { data: T[]; usingSeed: boolean } {
  const [data, setData] = useState<T[]>(fallback);
  const [usingSeed, setUsingSeed] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, name)),
      (snap) => {
        if (snap.empty) {
          setData(fallback);
          setUsingSeed(true);
        } else {
          setData(snap.docs.map((d) => ({ id: d.id, ...d.data() })) as T[]);
          setUsingSeed(false);
        }
      },
      () => {
        // Permission error / offline: keep showing seed data.
        setData(fallback);
        setUsingSeed(true);
      }
    );
    return unsub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return { data, usingSeed };
}

export function useSystems() {
  return useCollection<SystemCardData>("systems", SYSTEMS);
}
export function useCharges() {
  return useCollection<Charge>("charges", CHARGES);
}
export function useActivity() {
  return useCollection<ActivityItem>("activity", ACTIVITY);
}
