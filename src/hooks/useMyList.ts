'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, where, onSnapshot, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useAuth } from '@/context/AuthContext';
import { Movie } from '@/services/tmdb';

export function useMyList() {
  const { user } = useAuth();
  const [list, setList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setList([]);
      setLoading(false);
      return;
    }

    const q = query(collection(db, 'mylist'), where('userId', '==', user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const movies = snapshot.docs.map(doc => ({ ...doc.data(), firebaseId: doc.id } as any));
      setList(movies);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const addToList = async (movie: Movie) => {
    if (!user) return alert('Faça login para adicionar à sua lista!');
    
    // Check if already in list
    const q = query(collection(db, 'mylist'), where('userId', '==', user.uid), where('id', '==', movie.id));
    const existing = await getDocs(q);
    if (!existing.empty) return alert('Já está na sua lista!');

    await addDoc(collection(db, 'mylist'), {
      ...movie,
      userId: user.uid,
      addedAt: new Date().toISOString()
    });
  };

  const removeFromList = async (firebaseId: string) => {
    await deleteDoc(doc(db, 'mylist', firebaseId));
  };

  return { list, loading, addToList, removeFromList };
}
