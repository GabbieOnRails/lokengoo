import { motion } from 'motion/react';
import { PRODUCTS } from '../types';
import { ShoppingBag, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Collection() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-blue/20">
      <Navbar />
      
      <main className="pt-32 pb-24 px-8 md:px-20 max-w-[1600px] mx-auto">
        <header className="mb-20 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <span className="text-[10px] uppercase tracking-[4px] text-brand-blue font-black">Limited Release</span>
            <h1 className="text-7xl md:text-9xl leading-[0.8] font-black tracking-tighter lowercase">
               The Full Collection
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-xs md:text-sm text-brand-muted font-bold tracking-widest uppercase leading-relaxed"
          >
            Explore our curated selection of high-performance sets, designed to bridge the gap between court excellence and off-court elegance.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/product/${product.id}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden mb-6 bg-white relative rounded-tl-[60px] rounded-br-[60px] border border-brand-line p-3">
                  <div className="relative w-full h-full overflow-hidden rounded-tl-[50px] rounded-br-[50px]">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                       <div className="bg-white p-4 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <ArrowUpRight size={20} className="text-brand-ink" />
                       </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-start px-2">
                  <div className="space-y-1">
                    <h3 className="text-xs uppercase font-black tracking-tight group-hover:text-brand-blue transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm font-black text-brand-ink uppercase tracking-tighter">
                      {product.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                     <span className="text-[8px] font-black tracking-widest text-brand-muted opacity-0 group-hover:opacity-100 transition-all uppercase flex items-center gap-1">
                        View details <ArrowUpRight size={10} />
                     </span>
                     <div className="w-10 h-10 rounded-full border border-brand-line flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      <ShoppingBag size={14} className="group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
