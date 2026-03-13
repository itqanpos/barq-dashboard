import { useEffect, useState } from 'react';
import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
  QueryConstraint,
} from 'firebase/firestore';
import { db } from '../lib/firebase';

export function useFirestore<T>(
  collectionName: string,
  constraints?: QueryConstraint[]
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      const collectionRef = collection(db, collectionName);
      const q = constraints ? query(collectionRef, ...constraints) : collectionRef;

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const docs: T[] = [];
        snapshot.forEach((doc) => {
          docs.push({ id: doc.id, ...doc.data() } as T);
        });
        setData(docs);
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
      setLoading(false);
    }
  }, [collectionName, constraints]);

  return { data, loading, error };
}

export async function getFirestoreData<T>(
  collectionName: string,
  constraints?: QueryConstraint[]
): Promise<T[]> {
  try {
    const collectionRef = collection(db, collectionName);
    const q = constraints ? query(collectionRef, ...constraints) : collectionRef;
    const snapshot = await getDocs(q);
    const docs: T[] = [];
    snapshot.forEach((doc) => {
      docs.push({ id: doc.id, ...doc.data() } as T);
    });
    return docs;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
