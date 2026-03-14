import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 800], [0, -200]);
  const y2 = useTransform(scrollY, [0, 800], [0, -100]);
  const scrollOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden bg-stone-100">
      {/* Background Layer 1: Makeup */}
      <motion.div 
        animate={{ opacity: activeIndex === 0 ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <motion.div style={{ opacity: scrollOpacity }} className="absolute inset-0">
          <motion.img
            style={{ y: y1 }}
            animate={{ 
              x: [0, -30, 0],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1 
            }}
            src="https://thumbs.dreamstime.com/b/makeup-products-jewelry-floral-background-45379138.jpg"
            alt="Makeup Background"
            className="w-[110%] h-[120%] object-cover max-w-none"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </motion.div>

      {/* Background Layer 2: Fashion Banner */}
      <motion.div 
        animate={{ opacity: activeIndex === 1 ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <motion.div style={{ opacity: scrollOpacity }} className="absolute inset-0">
          <motion.img
            style={{ y: y2 }}
            animate={{ 
              x: [0, 30, 0],
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1 
            }}
            src="https://static.vecteezy.com/system/resources/thumbnails/059/145/924/small/vibrant-fashion-sale-banner-design-for-seasonal-store-promotions-photo.jpg"
            alt="Fashion Background"
            className="w-[110%] h-[120%] object-cover max-w-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/20" />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-50/10 to-stone-50 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block text-stone-500 font-medium tracking-widest uppercase text-xs mb-4">
            New Collection 2026
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-stone-900 leading-tight mb-8">
            The Art of <br />
            <span className="italic text-stone-600">Elegance</span>
          </h1>
          <p className="text-xl text-stone-600 mb-10 max-w-lg leading-relaxed">
            A curated fusion of premium beauty and high-end fashion. Discover the collection that defines modern style.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="#shop"
              className="inline-flex items-center gap-3 bg-stone-900 text-white px-10 py-5 rounded-full font-bold hover:bg-stone-800 transition-all group shadow-xl hover:shadow-2xl"
            >
              Shop Collection
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-3 border-2 border-stone-900 text-stone-900 px-10 py-5 rounded-full font-bold hover:bg-stone-900 hover:text-white transition-all"
            >
              Our Story
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-stone-400 to-transparent" />
      </motion.div>
    </section>
  );
};
