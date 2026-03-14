import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-stone-900 text-stone-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <a href="/" className="text-2xl font-serif font-bold tracking-tight text-white">
              ASAD<span className="text-stone-500">SHOP</span>
            </a>
            <p className="text-sm leading-relaxed">
              Premium men's fashion destination. We bring you the latest trends and timeless classics for every occasion.
            </p>
            <div className="flex gap-4">
              <motion.a whileHover={{ scale: 1.2, color: '#fff' }} href="#" className="transition-colors"><Facebook size={20} /></motion.a>
              <motion.a whileHover={{ scale: 1.2, color: '#fff' }} href="#" className="transition-colors"><Twitter size={20} /></motion.a>
              <motion.a whileHover={{ scale: 1.2, color: '#fff' }} href="#" className="transition-colors"><Instagram size={20} /></motion.a>
              <motion.a whileHover={{ scale: 1.2, color: '#fff' }} href="#" className="transition-colors"><Youtube size={20} /></motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-sm">
              {['Home', 'Shop', 'About Us', 'Contact', 'Privacy Policy'].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-6">Categories</h4>
            <ul className="flex flex-col gap-4 text-sm">
              {['T-shirts', 'Tracksuits', 'Sherwanis', 'Running Shoes', 'Pent Coats'].map((cat) => (
                <motion.li key={cat} whileHover={{ x: 5 }}>
                  <a href="#" className="hover:text-white transition-colors">{cat}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
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
                contact@asadshop.com
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
        >
          <p>© 2026 Asad Shop. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
