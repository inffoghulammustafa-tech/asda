import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-stone-200 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-stone-900 hover:text-white transition-colors">
            <Heart size={18} />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-stone-900 hover:text-white transition-colors">
            <ShoppingCart size={18} />
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-stone-900">
            {product.category}
          </span>
        </div>
      </div>
      <h3 className="font-medium text-stone-900 mb-1 group-hover:text-stone-600 transition-colors">
        {product.name}
      </h3>
      <p className="text-stone-500 font-bold">${product.price.toFixed(2)}</p>
    </motion.div>
  );
};
