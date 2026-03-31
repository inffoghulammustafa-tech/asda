import React from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export const Navbar: React.FC = () => {
  return (
    <nav className="glass-nav relative overflow-hidden group">
      {/* Subtle Glow Background */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          x: [-20, 20, -20]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-blue-500/5 to-blue-400/10 blur-xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <motion.a 
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 15px rgba(59, 130, 246, 0.6)"
              }}
              href="/" 
              className="text-2xl font-serif font-bold tracking-tight text-blue-950 transition-all"
            >
              ASAD<span className="text-blue-500">SHOP</span>
            </motion.a>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-blue-600">
              {['Home', 'Shop', 'About', 'Blogs', 'Contact'].map((link) => (
                <motion.a 
                  key={link}
                  whileHover={{ 
                    scale: 1.1, 
                    color: '#1e3a8a',
                    textShadow: "0 0 10px rgba(59, 130, 246, 0.4)"
                  }}
                  href={link === 'Home' ? '/' : `#${link.toLowerCase()}`} 
                  className="hover:text-blue-950 transition-all duration-300 relative"
                >
                  {link}
                  <motion.span 
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className="absolute -bottom-1 left-0 h-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59, 130, 246, 0.8)]"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Search, label: 'Search' },
              { icon: User, label: 'User' }
            ].map((action, index) => (
              <motion.button 
                key={index}
                whileHover={{ 
                  scale: 1.2, 
                  color: '#1e3a8a',
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
                }}
                className="p-2 text-blue-600 hover:text-blue-950 transition-all rounded-full"
              >
                <action.icon size={20} />
              </motion.button>
            ))}
            
            <motion.button 
              whileHover={{ 
                scale: 1.2, 
                color: '#1e3a8a',
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
              }}
              className="p-2 text-blue-600 hover:text-blue-950 transition-all rounded-full relative"
            >
              <ShoppingCart size={20} />
              <motion.span 
                animate={{ 
                  boxShadow: ["0 0 0px rgba(30, 58, 138, 0)", "0 0 10px rgba(30, 58, 138, 0.8)", "0 0 0px rgba(30, 58, 138, 0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-0 right-0 bg-blue-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full"
              >
                0
              </motion.span>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 text-blue-600 hover:text-blue-950 transition-colors"
            >
              <Menu size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};
