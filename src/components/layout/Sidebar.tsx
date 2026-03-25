'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Film, Tv, Heart, Search, Settings, Clock, LogOut, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import { auth as firebaseAuth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

const menuItems = [
  { icon: Home, label: 'Início', href: '/' },
  { icon: Film, label: 'Filmes', href: '/' },
  { icon: Tv, label: 'Séries', href: '/' },
  { icon: Heart, label: 'Minha Lista', href: '/mylist' },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();

  const handleLogout = () => {
    signOut(firebaseAuth);
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 glass-panel border-r-0 z-50 flex flex-col p-6 hidden lg:flex">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(147,51,234,0.5)]">
          X
        </div>
        <span className="text-2xl font-bold tracking-tighter italic">XSTREAM</span>
      </div>

      <nav className="flex-1 space-y-2">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4 px-2">Menu Principal</p>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "sidebar-link",
              pathname === item.href ? "active" : ""
            )}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto space-y-2">
        {user ? (
          <>
            <div className="p-4 glass-panel rounded-2xl mb-4 border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <User size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-bold truncate">{user.displayName || 'Usuário'}</p>
                  <p className="text-[10px] text-primary uppercase font-black italic">Premium</p>
                </div>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="sidebar-link w-full text-left hover:text-red-400 group"
            >
              <LogOut size={20} className="group-hover:text-red-400" />
              <span className="font-medium">Sair</span>
            </button>
          </>
        ) : (
          <Link href="/login" className="sidebar-link bg-primary text-white hover:bg-primary/80 justify-center">
            <span className="font-bold">Fazer Login</span>
          </Link>
        )}
      </div>
    </aside>
  );
}
