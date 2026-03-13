import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <a href="/" className="text-2xl font-serif font-bold tracking-tight text-white">
              MUSTAFA<span className="text-stone-500">SHOP</span>
            </a>
            <p className="text-sm leading-relaxed">
              Premium men's fashion destination. We bring you the latest trends and timeless classics for every occasion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Categories</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">T-shirts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tracksuits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sherwanis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Running Shoes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pent Coats</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-stone-500" />
                123 Fashion Street, Style City
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-stone-500" />
                +1 234 567 890
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-stone-500" />
                contact@mustafashop.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Mustafa Shop. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
