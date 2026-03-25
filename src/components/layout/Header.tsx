'use client';

import { Bell, Search, User } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };
  }

  return (
    <header className={`fixed top-0 right-0 left-0 lg:left-64 h-20 z-40 transition-all duration-300 px-6 lg:px-10 flex items-center justify-between ${isScrolled ? 'glass-panel border-x-0 border-t-0 bg-black/60' : 'bg-transparent'}`}>
      <div className="flex-1 flex items-center gap-4 max-w-xl">
        <div className="relative w-full group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Buscar filmes, séries, atores..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-gray-400 hover:text-white transition-colors">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full ring-2 ring-black"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold">Leonardo</p>
            <p className="text-xs text-primary">Plano Premium</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center border border-white/20 overflow-hidden cursor-pointer hover:scale-105 transition-transform">
            <User size={24} />
          </div>
        </div>
      </div>
    </header>
  );
}
