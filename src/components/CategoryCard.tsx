import React from 'react';
import { Category } from '../types';
import { motion } from 'motion/react';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -8,
        boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.2), 0 0 20px 2px rgba(255, 255, 255, 0.2)"
      }}
      className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/5] transition-all duration-300"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-xl font-serif font-bold text-white mb-1">{category.name}</h3>
        <p className="text-stone-300 text-sm">{category.count} Products</p>
      </div>
    </motion.div>
  );
};
