import { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryCard } from './components/CategoryCard';
import { ProductCard } from './components/ProductCard';
import { BlogCard } from './components/BlogCard';
import { Footer } from './components/Footer';
import { CATEGORIES, PRODUCTS, BLOG_POSTS } from './constants';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function App() {
  const aboutRef = useRef(null);

  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  const aboutY = useTransform(aboutScroll, [0, 1], [0, -100]);

  const showcaseRef = useRef(null);
  const { scrollYProgress: showcaseScroll } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"]
  });
  const showcaseY1 = useTransform(showcaseScroll, [0, 1], [50, -50]);
  const showcaseY2 = useTransform(showcaseScroll, [0, 1], [-50, 50]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow relative">
        <Hero />

        {/* Categories Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-between items-end mb-12"
            >
              <div>
                <span className="text-stone-500 font-medium tracking-widest uppercase text-xs mb-2 block">
                  Browse by
                </span>
                <h2 className="text-4xl font-serif font-bold text-stone-900">Categories</h2>
              </div>
              <a href="#shop" className="text-sm font-bold text-stone-900 flex items-center gap-2 hover:gap-3 transition-all">
                View All <ArrowRight size={16} />
              </a>
            </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="shop" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-stone-500 font-medium tracking-widest uppercase text-xs mb-2 block">
                Our Favorites
              </span>
              <h2 className="text-4xl font-serif font-bold text-stone-900">Featured Products</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-16 text-center">
              <button className="border-2 border-stone-900 text-stone-900 px-10 py-4 rounded-full font-bold hover:bg-stone-900 hover:text-white transition-all">
                Explore Full Shop
              </button>
            </div>
          </div>
        </section>

        {/* Dual Showcase Section */}
        <section ref={showcaseRef} className="relative py-32 bg-stone-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                style={{ y: showcaseY1 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
              >
                <img 
                  src="https://thumbs.dreamstime.com/b/makeup-products-jewelry-floral-background-45379138.jpg" 
                  alt="Beauty Showcase" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-serif font-bold">Beauty Essentials</h3>
                </div>
              </motion.div>
              <motion.div 
                style={{ y: showcaseY2 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl md:mt-24"
              >
                <img 
                  src="https://static.vecteezy.com/system/resources/thumbnails/059/145/924/small/vibrant-fashion-sale-banner-design-for-seasonal-store-promotions-photo.jpg" 
                  alt="Fashion Showcase" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-serif font-bold">Fashion Trends</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="relative py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Decorative background element */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-stone-200 rounded-2xl -z-10" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-stone-200 rounded-2xl -z-10" />
                
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-stone-100 p-4 border border-stone-200">
                  <motion.img
                    style={{ y: aboutY }}
                    src="https://i.pinimg.com/736x/ab/ce/43/abce434862e605f87636195d44fdbb35.jpg"
                    alt="About Asad Shop"
                    className="w-full h-full object-cover object-top rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <motion.div 
                  animate={{ 
                    boxShadow: [
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      "0 20px 25px -5px rgba(168, 162, 158, 0.3)",
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-8 -right-8 bg-stone-900 text-white p-10 rounded-2xl hidden md:block shadow-2xl"
                >
                  <p className="text-4xl font-serif font-bold mb-2">10+</p>
                  <p className="text-stone-400 text-sm uppercase tracking-widest">Years of Style</p>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-stone-500 font-medium tracking-widest uppercase text-xs mb-2 block">
                  Our Story
                </span>
                <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                  Crafting Confidence <br />
                  <span className="italic text-stone-600">Since 2016</span>
                </h2>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Asad Shop started with a simple vision: to provide high-quality, stylish clothing that empowers men to look and feel their best. We believe that fashion is more than just clothes; it's an expression of identity.
                </p>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  Our collections are carefully curated to ensure that every piece meets our standards of quality, comfort, and style. From the stitching of our sherwanis to the fabric of our t-shirts, we pay attention to the details that matter.
                </p>
                <button className="bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-all">
                  Read Our Full Story
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section id="blogs" className="py-24 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-stone-500 font-medium tracking-widest uppercase text-xs mb-2 block">
                  Latest News
                </span>
                <h2 className="text-4xl font-serif font-bold text-stone-900">From Our Blog</h2>
              </div>
              <a href="#" className="text-sm font-bold text-stone-900 flex items-center gap-2 hover:gap-3 transition-all">
                All Posts <ArrowRight size={16} />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {BLOG_POSTS.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-stone-900 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Join the Inner Circle</h2>
            <p className="text-stone-400 mb-10">
              Subscribe to our newsletter and get 10% off your first order, plus exclusive access to new drops and styling tips.
            </p>
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4" 
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow bg-white/10 border border-white/20 rounded-full px-8 py-4 focus:outline-none focus:border-white transition-colors focus:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-stone-900 px-10 py-4 rounded-full font-bold hover:bg-stone-200 transition-all"
              >
                Subscribe
              </motion.button>
            </motion.form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
