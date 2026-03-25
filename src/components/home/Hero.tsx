'use client';

import { Play, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGE_BASE_URL, Movie } from '@/services/tmdb';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface HeroProps {
  movies: Movie[];
  onPlay?: (movie: Movie) => void;
  onAddToList?: (movie: Movie) => void;
}

export function Hero({ movies, onPlay, onAddToList }: HeroProps) {
  if (!movies || movies.length === 0) return <div className="h-[85vh] bg-neutral-900 animate-pulse" />;

  return (
    <section className="relative h-[85vh] -mt-20 -mx-6 lg:-mx-10 overflow-hidden mb-12 group">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        navigation={{ prevEl: '.hero-prev', nextEl: '.hero-next' }}
        loop={true}
        className="h-full w-full"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} className="h-full w-full relative">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-neutral-900 transition-transform duration-[8000ms] scale-100 group-hover:scale-110"
              style={{ backgroundImage: `url(${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path})` }}
            ></div>
            
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center px-10 lg:px-20 max-w-5xl pt-20">
              <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                    Em Destaque
                  </span>
                  <span className="text-sm font-medium text-white/80 backdrop-blur-md bg-white/5 px-2 py-1 rounded">
                    {(movie.release_date || movie.first_air_date || '').split('-')[0]} • {movie.media_type === 'movie' ? 'Filme' : 'Série'}
                  </span>
                </div>
                
                <h1 className="text-5xl lg:text-8xl font-black mb-6 tracking-tighter leading-[0.9] drop-shadow-2xl uppercase italic">
                  {movie.title || movie.name}
                </h1>
                
                <p className="text-xl text-gray-200 mb-10 line-clamp-3 max-w-2xl drop-shadow-md leading-relaxed">
                  {movie.overview}
                </p>
                
                <div className="flex flex-wrap items-center gap-5">
                  <button 
                    onClick={() => onPlay?.(movie)}
                    className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-primary hover:text-white transition-all scale-100 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
                  >
                    <Play fill="currentColor" size={24} />
                    Assistir Agora
                  </button>
                  
                  <button 
                    onClick={() => onAddToList?.(movie)}
                    className="flex items-center gap-3 glass-panel px-10 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-white/10 transition-all border-white/20"
                  >
                    <Plus size={24} />
                    Minha Lista
                  </button>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <button className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full glass-panel flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-primary/20 hover:border-primary">
          <ChevronLeft size={32} />
        </button>
        <button className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full glass-panel flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-primary/20 hover:border-primary">
          <ChevronRight size={32} />
        </button>

        {/* Custom Pagination */}
        <div className="custom-pagination !bottom-10 !left-20 !w-auto !flex gap-2"></div>
      </Swiper>

      {/* Hero Fade Bottom */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
