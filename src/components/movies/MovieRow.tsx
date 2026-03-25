import { Movie } from '@/services/tmdb';
import { MovieCard } from './MovieCard';
import { ChevronRight } from 'lucide-react';

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onPlay?: (movie: Movie) => void;
  onAddToList?: (movie: Movie) => void;
}

export function MovieRow({ title, movies, onPlay, onAddToList }: MovieRowProps) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="mb-10 relative">
      <div className="flex items-center justify-between mb-4 px-2">
        <h2 className="text-xl lg:text-2xl font-black italic tracking-tighter uppercase flex items-center gap-2 group cursor-pointer">
          {title}
          <div className="h-1 w-12 bg-primary rounded-full hidden lg:block"></div>
        </h2>
      </div>
      
      <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide px-2">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onPlay={onPlay}
            onAddToList={onAddToList}
          />
        ))}
      </div>
    </div>
  );
}
