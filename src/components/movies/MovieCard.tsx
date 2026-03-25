'use client';

import { Star, Play, Plus } from 'lucide-react';
import { Movie, IMAGE_BASE_URL } from '@/services/tmdb';
import { motion } from 'framer-motion';

interface MovieCardProps {
  movie: Movie;
  onPlay?: (movie: Movie) => void;
  onAddToList?: (movie: Movie) => void;
}

export function MovieCard({ movie, onPlay, onAddToList }: MovieCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, zIndex: 10 }}
      className="relative flex-shrink-0 w-48 lg:w-52 group cursor-pointer"
    >
      <div className="aspect-[2/3] relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
        <img 
          src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
          alt={movie.title || movie.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="flex items-center gap-2 mb-3">
             <button 
              onClick={(e) => { e.stopPropagation(); onPlay?.(movie); }}
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
             >
                <Play fill="currentColor" size={20} className="ml-0.5" />
             </button>
             <button 
              onClick={(e) => { e.stopPropagation(); onAddToList?.(movie); }}
              className="w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
             >
                <Plus size={20} />
             </button>
          </div>
          
          <div className="flex items-center gap-2 mb-1">
            <div className="flex items-center gap-1 bg-primary/20 px-1.5 py-0.5 rounded text-[10px] font-bold text-primary">
              <Star fill="currentColor" size={10} />
              {movie.vote_average.toFixed(1)}
            </div>
            <span className="text-[10px] text-gray-400">
              {(movie.release_date || movie.first_air_date || '').split('-')[0]}
            </span>
          </div>
          
          <h3 className="text-xs font-black truncate uppercase italic tracking-tighter">
            {movie.title || movie.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
