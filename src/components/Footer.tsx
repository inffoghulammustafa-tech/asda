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
    <footer className="relative bg-blue-950 text-blue-300 py-24 overflow-hidden font-mono border-t border-blue-500/20">
      {/* Animated Background Glows - Enhanced */}
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1.5, 1, 1.5],
          opacity: [0.1, 0.3, 0.1],
          x: [0, -100, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <motion.a 
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.8)"
              }}
              href="/" 
              className="text-3xl font-serif font-bold tracking-tight text-white inline-block transition-all"
            >
              ASAD<span className="text-blue-500">SHOP</span>
            </motion.a>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium women's fashion destination. We bring you the latest trends and timeless classics for every occasion.
            </p>
            <div className="flex gap-5">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'Youtube' }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  whileHover={{ 
                    scale: 1.3, 
                    color: '#fff',
                    rotate: [0, -10, 10, 0],
                    boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)",
                    backgroundColor: "rgba(59, 130, 246, 0.3)"
                  }} 
                  href="#" 
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-8 relative inline-block">
              Quick Links
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-0.5 bg-blue-500 shadow-[0_0_10px_rgba(59, 130, 246, 0.8)]"
              />
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              {['Home', 'Shop', 'About Us', 'Contact', 'Privacy Policy'].map((link) => (
                <motion.li key={link} whileHover={{ x: 10, color: '#fff' }} className="transition-all duration-300">
                  <a href="#" className="hover:text-white flex items-center gap-2 group">
                    <motion.span 
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59, 130, 246, 1)]"
                    />
                    <span className="group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">{link}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-8 relative inline-block">
              Categories
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-0.5 bg-blue-500 shadow-[0_0_10px_rgba(59, 130, 246, 0.8)]"
              />
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              {['Dresses', 'Tops', 'Skirts', 'Handbags', 'Jewelry'].map((cat) => (
                <motion.li key={cat} whileHover={{ x: 10, color: '#fff' }} className="transition-all duration-300">
                  <a href="#" className="hover:text-white flex items-center gap-2 group">
                    <motion.span 
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59, 130, 246, 1)]"
                    />
                    <span className="group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">{cat}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-8 relative inline-block">
              Contact Info
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-0.5 bg-blue-500 shadow-[0_0_10px_rgba(59, 130, 246, 0.8)]"
              />
            </h4>
            <ul className="flex flex-col gap-6 text-sm">
              {[
                { icon: MapPin, text: '123 Fashion Street, Style City' },
                { icon: Phone, text: '+1 234 567 890' },
                { icon: Mail, text: 'contact@asadshop.com' }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/30 group-hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] transition-all">
                    <item.icon size={18} className="text-blue-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="group-hover:text-white group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] transition-all">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="pt-10 border-t border-blue-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-xs"
        >
          <p className="tracking-widest uppercase opacity-60">© 2026 Asad Shop. All rights reserved.</p>
          <div className="flex gap-8">
            {['Terms of Service', 'Shipping Policy'].map((text) => (
              <motion.a 
                key={text}
                whileHover={{ scale: 1.1, color: '#fff', textShadow: "0 0 10px rgba(255,255,255,0.5)" }}
                href="#" 
                className="hover:text-white transition-colors relative group"
              >
                {text}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full shadow-[0_0_5px_white]" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
