import { motion } from 'motion/react';
import { PRODUCTS } from '../types';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CollectionGrid() {
  return (
    <section className="py-24 px-8 md:px-20 bg-white border-y border-dashed border-brand-line">
      {/* Header Section from Image Style */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 max-w-[1600px] mx-auto">
        <div className="flex flex-col gap-4">
          <span className="text-[10px] uppercase tracking-[4px] text-brand-blue font-black">Curated Selection</span>
          <h2 className="text-6xl md:text-8xl leading-[0.8] font-black tracking-tighter lowercase">
              find your <br />perfection
          </h2>
        </div>
        <div className="max-w-sm text-right">
          <p className="text-xs text-brand-muted font-bold tracking-widest uppercase leading-relaxed">
            Shop by category and discover looks that suit your mood, fit any occasion, and elevate your daily routine on and off the court.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[1600px] mx-auto">
        {PRODUCTS.slice(0, 3).map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={`/product/${product.id}`} className="group block">
              {/* Image Container with Custom Corners */}
              <div className="aspect-[4/5] overflow-hidden mb-6 bg-brand-cream relative rounded-tl-[60px] rounded-br-[60px] border border-brand-line p-3">
                <div className="relative w-full h-full overflow-hidden rounded-tl-[50px] rounded-br-[50px]">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                     <div className="bg-white p-4 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <ArrowUpRight size={20} className="text-brand-ink" />
                     </div>
                  </div>
                </div>

                {/* Tag */}
                <div className="absolute top-8 left-8">
                   <span className="bg-white/90 backdrop-blur-sm border border-brand-line px-4 py-1.5 rounded-full text-[8px] font-black tracking-[3px] uppercase">
                      New Arrival
                   </span>
                </div>
              </div>

              {/* Product Info */}
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

      {/* Pagination Style replaced with View All link */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-24 flex flex-col items-center gap-8 max-w-[1600px] mx-auto"
      >
        <Link to="/collection" className="group flex flex-col items-center gap-4">
          <span className="text-[10px] font-black uppercase tracking-[6px] group-hover:text-brand-blue transition-colors">View Full Collection</span>
          <div className="h-px w-64 bg-brand-line relative">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute top-0 left-0 h-full bg-brand-blue" 
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
