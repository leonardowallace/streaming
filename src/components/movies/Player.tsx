'use client';

import { X, Play, Pause, Volume2, Maximize, SkipBack, SkipForward } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Movie } from '@/services/tmdb';

interface PlayerProps {
  movie: Movie | null;
  onClose: () => void;
}

export function Player({ movie, onClose }: PlayerProps) {
  if (!movie) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black flex flex-col"
      >
        {/* Header Controls */}
        <div className="absolute top-0 w-full p-8 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="hover:scale-110 transition-transform">
              <X size={32} />
            </button>
            <h2 className="text-2xl font-bold uppercase italic tracking-tighter">
              Assistindo: <span className="text-primary">{movie.title || movie.name}</span>
            </h2>
          </div>
        </div>

        {/* Video Placeholder Content */}
        <div className="flex-1 flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 transition-transform duration-[20000ms] scale-110 hover:scale-100">
             <img 
               src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
               alt="poster" 
               className="w-full h-full object-cover blur-sm"
             />
           </div>
           
           <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="z-10 text-center"
           >
              <div className="w-32 h-32 rounded-full border-4 border-primary flex items-center justify-center mb-6 mx-auto animate-pulse">
                <Play fill="currentColor" className="text-primary ml-2" size={64} />
              </div>
              <p className="text-4xl font-black uppercase tracking-widest italic mb-2">Iniciando Transmissão...</p>
              <p className="text-gray-400">Qualidade: 4K Ultra HD • Áudio: 5.1 Surround</p>
           </motion.div>
        </div>

        {/* Footer Controls */}
        <div className="p-10 bg-gradient-to-t from-black/80 to-transparent">
          <div className="w-full h-1.5 bg-white/20 rounded-full mb-8 relative group cursor-pointer">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-primary rounded-full">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform shadow-[0_0_10px_rgba(147,51,234,1)]"></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <button className="hover:text-primary transition-colors"><SkipBack size={28} /></button>
              <button className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Play fill="currentColor" size={28} className="ml-1" />
              </button>
              <button className="hover:text-primary transition-colors"><SkipForward size={28} /></button>
              <div className="flex items-center gap-4 group">
                <Volume2 size={24} className="group-hover:text-primary transition-colors" />
                <div className="w-24 h-1 bg-white/20 rounded-full">
                  <div className="w-2/3 h-full bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-sm font-mono text-gray-400">00:42:15 / 02:14:30</span>
            </div>

            <div className="flex items-center gap-6">
              <button className="px-3 py-1 border border-white/20 rounded text-xs font-bold hover:bg-white hover:text-black transition-all">CC</button>
              <button className="hover:text-primary transition-colors"><Maximize size={24} /></button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
