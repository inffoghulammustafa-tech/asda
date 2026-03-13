import React from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-serif font-bold tracking-tight text-stone-900">
              ASAD<span className="text-stone-500">SHOP</span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
              <a href="/" className="hover:text-stone-900 transition-colors">Home</a>
              <a href="#shop" className="hover:text-stone-900 transition-colors">Shop</a>
              <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
              <a href="#blogs" className="hover:text-stone-900 transition-colors">Blogs</a>
              <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 bg-stone-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </button>
            <button className="md:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
