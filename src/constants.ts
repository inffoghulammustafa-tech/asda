import { Product, BlogPost, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Dresses',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800',
    count: 24
  },
  {
    id: '2',
    name: 'Tops',
    image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=800',
    count: 18
  },
  {
    id: '3',
    name: 'Skirts',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=800',
    count: 12
  },
  {
    id: '4',
    name: 'Handbags',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
    count: 15
  },
  {
    id: '5',
    name: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    count: 30
  },
  {
    id: '6',
    name: 'Footwear',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
    count: 20
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Floral Maxi Dress',
    price: 75.00,
    category: 'Dresses',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant floral print maxi dress for summer outings.'
  },
  {
    id: 'p2',
    name: 'Silk Evening Blouse',
    price: 55.00,
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&q=80&w=800',
    description: 'Luxurious silk blouse perfect for formal events.'
  },
  {
    id: 'p3',
    name: 'Pleated Midi Skirt',
    price: 45.00,
    category: 'Skirts',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=800',
    description: 'Stylish pleated midi skirt with a comfortable fit.'
  },
  {
    id: 'p4',
    name: 'Designer Leather Handbag',
    price: 150.00,
    category: 'Handbags',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
    description: 'Premium leather handbag with elegant gold hardware.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Spring Fashion Trends 2026',
    excerpt: 'Discover the latest styles that will dominate the streets this spring season.',
    date: 'March 25, 2026',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800',
    author: 'Sarah'
  },
  {
    id: 'b2',
    title: 'Accessorizing Your Outfit',
    excerpt: 'A comprehensive guide to choosing the right accessories for any occasion.',
    date: 'March 15, 2026',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
    author: 'Elena'
  }
];
