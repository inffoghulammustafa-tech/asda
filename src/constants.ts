import { Product, BlogPost, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'T-shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    count: 12
  },
  {
    id: '2',
    name: 'Tracksuit',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    count: 8
  },
  {
    id: '3',
    name: 'Sherwani',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800',
    count: 5
  },
  {
    id: '4',
    name: 'Running Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    count: 15
  },
  {
    id: '5',
    name: 'Tactical Suit',
    image: 'https://images.unsplash.com/photo-1508100134119-f93588df7638?auto=format&fit=crop&q=80&w=800',
    count: 4
  },
  {
    id: '6',
    name: 'Pent Coat',
    image: 'https://images.unsplash.com/photo-1594932224828-b4b059b6f6ee?auto=format&fit=crop&q=80&w=800',
    count: 6
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Slim Fit Printed Polo',
    price: 45.00,
    category: 'T-shirt',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800',
    description: 'Casual slim fit printed golf polo shirt tops.'
  },
  {
    id: 'p2',
    name: 'Athletic 2-Piece Tracksuit',
    price: 89.99,
    category: 'Tracksuit',
    image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&q=80&w=800',
    description: 'Casual full zip jogging sweat suit workout sports set.'
  },
  {
    id: 'p3',
    name: 'Traditional Indian Sherwani',
    price: 299.00,
    category: 'Sherwani',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800',
    description: 'Traditional Indian ethnic wear for men, ideal for weddings.'
  },
  {
    id: 'p4',
    name: 'Blade Type Sneakers',
    price: 120.00,
    category: 'Running Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    description: 'Non-slip athletic tennis walking blade type sneakers.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Summer Fashion Trends 2026',
    excerpt: 'Discover the latest styles that will dominate the streets this summer season.',
    date: 'March 10, 2026',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800',
    author: 'Mustafa'
  },
  {
    id: 'b2',
    title: 'How to Choose the Perfect Suit',
    excerpt: 'A comprehensive guide to finding a suit that fits your style and body type.',
    date: 'March 5, 2026',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    author: 'Mustafa'
  }
];
