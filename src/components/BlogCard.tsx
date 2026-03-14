import React from 'react';
import { BlogPost } from '../types';
import { motion } from 'motion/react';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 0 15px 2px rgba(168, 162, 158, 0.2)"
      }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 p-4 rounded-3xl transition-all duration-300"
    >
      <div className="aspect-[16/9] overflow-hidden rounded-2xl">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex items-center gap-4 text-xs text-stone-500 font-medium uppercase tracking-wider">
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {post.date}
        </span>
        <span className="flex items-center gap-1">
          <User size={12} />
          By {post.author}
        </span>
      </div>
      <h3 className="text-xl font-serif font-bold text-stone-900 hover:text-stone-600 transition-colors cursor-pointer">
        {post.title}
      </h3>
      <p className="text-stone-600 line-clamp-2">
        {post.excerpt}
      </p>
      <a href="#" className="text-sm font-bold text-stone-900 underline underline-offset-4 hover:text-stone-600 transition-colors">
        Read More
      </a>
    </motion.article>
  );
};
