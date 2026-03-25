'use client';

import { useEffect, useState } from 'react';
import { getTrending, getMovies, getTV, Movie } from '@/services/tmdb';
import { Hero } from '@/components/home/Hero';
import { MovieRow } from '@/components/movies/MovieRow';
import { Player } from '@/components/movies/Player';
import { useMyList } from '@/hooks/useMyList';

export default function HomePage() {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [popularTV, setPopularTV] = useState<Movie[]>([]);
  const [playingMovie, setPlayingMovie] = useState<Movie | null>(null);
  const { addToList } = useMyList();

  useEffect(() => {
    async function fetchData() {
      const [t, pm, ptv] = await Promise.all([
        getTrending(),
        getMovies('popular'),
        getTV('popular'),
      ]);
      setTrending(t);
      setPopularMovies(pm);
      setPopularTV(ptv);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <Hero 
        movies={trending.slice(0, 5)} 
        onPlay={(m) => setPlayingMovie(m)}
        onAddToList={(m) => addToList(m)}
      />
      
      <div className="space-y-4">
        <MovieRow 
          title="Tendências de Hoje" 
          movies={trending} 
          onPlay={(m) => setPlayingMovie(m)}
          onAddToList={(m) => addToList(m)}
        />
        <MovieRow 
          title="Filmes de Sucesso" 
          movies={popularMovies} 
          onPlay={(m) => setPlayingMovie(m)}
          onAddToList={(m) => addToList(m)}
        />
        <MovieRow 
          title="Séries Imperdíveis" 
          movies={popularTV} 
          onPlay={(m) => setPlayingMovie(m)}
          onAddToList={(m) => addToList(m)}
        />
      </div>

      <Player 
        movie={playingMovie} 
        onClose={() => setPlayingMovie(null)} 
      />

      <footer className="mt-20 py-10 border-t border-white/10 text-center">
        <p className="text-gray-500 text-sm italic font-mono uppercase tracking-widest">
          XSTREAM PREMIUM © 2024 • Desenvolvido para Leonardo Wallace
        </p>
      </footer>
    </div>
  );
}
