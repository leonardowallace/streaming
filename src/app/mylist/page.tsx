'use client';

import { useMyList } from '@/hooks/useMyList';
import { MovieCard } from '@/components/movies/MovieCard';
import { Player } from '@/components/movies/Player';
import { useState } from 'react';
import { Movie } from '@/services/tmdb';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function MyListPage() {
  const { list, loading, removeFromList } = useMyList();
  const { user, loading: authLoading } = useAuth();
  const [playingMovie, setPlayingMovie] = useState<Movie | null>(null);
  const router = useRouter();

  if (authLoading || loading) {
    return (
      <div className="flex items-center justify-center py-40">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center py-40 text-center">
        <h1 className="text-3xl font-bold mb-4 italic uppercase">Sua lista está vazia</h1>
        <p className="text-gray-400 mb-8 max-w-md">Faça login para salvar seus filmes e séries favoritos e acessá-los de qualquer lugar.</p>
        <button 
          onClick={() => router.push('/login')}
          className="bg-primary px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
        >
          Fazer Login Agora
        </button>
      </div>
    );
  }

  return (
    <div className="pt-10">
      <div className="flex items-center gap-4 mb-10">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter">Minhas <span className="text-primary">Escolhas</span></h1>
        <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gray-400">
          {list.length} Títulos
        </div>
      </div>

      {list.length === 0 ? (
        <div className="text-center py-20 glass-panel rounded-3xl border-dashed">
           <p className="text-gray-500 text-lg mb-4">Você ainda não adicionou nada à sua lista.</p>
           <button 
            onClick={() => router.push('/')}
            className="text-primary font-bold hover:underline"
           >
             Explorar catálogo
           </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {list.map((item) => (
            <div key={item.id} className="relative group">
              <MovieCard 
                movie={item} 
                onPlay={(m) => setPlayingMovie(m)}
              />
              <button 
                onClick={() => removeFromList((item as any).firebaseId)}
                className="absolute top-2 right-2 z-20 w-8 h-8 bg-red-500/80 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center hover:bg-red-500 transition-all"
                title="Remover da lista"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      <Player 
        movie={playingMovie} 
        onClose={() => setPlayingMovie(null)} 
      />
    </div>
  );
}
