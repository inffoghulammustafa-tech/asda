import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden bg-stone-100">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=1920"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-stone-500 font-medium tracking-widest uppercase text-xs mb-4">
            New Collection 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 leading-tight mb-6">
            Elevate Your <br />
            <span className="italic text-stone-600">Personal Style</span>
          </h1>
          <p className="text-lg text-stone-600 mb-8 max-w-md">
            Discover our curated selection of premium men's fashion, from casual t-shirts to formal pent coats.
          </p>
          <div className="flex gap-4">
            <a
              href="#shop"
              className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-all group"
            >
              Shop Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-stone-300 text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-white transition-all"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
