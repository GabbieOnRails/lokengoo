import { motion } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { useState } from 'react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-cream/95 backdrop-blur-xl"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-6xl h-full md:h-auto max-h-[90vh] bg-white shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 hover:bg-brand-cream rounded-full transition-colors"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        {/* Image Side */}
        <div className="md:w-3/5 relative bg-brand-cream/50 aspect-square md:aspect-auto">
          <motion.img
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={product.gallery[activeImage]}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute inset-x-0 bottom-8 flex justify-center gap-4">
            {product.gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeImage === i ? 'w-8 bg-brand-gold' : 'bg-brand-gold/30'
                }`}
              />
            ))}
          </div>

          <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white p-2 hover:opacity-50 transition-opacity hidden md:block" onClick={() => setActiveImage(prev => (prev === 0 ? product.gallery.length - 1 : prev - 1))}>
            <ChevronLeft size={32} strokeWidth={1} />
          </button>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white p-2 hover:opacity-50 transition-opacity hidden md:block" onClick={() => setActiveImage(prev => (prev === product.gallery.length - 1 ? 0 : prev + 1))}>
            <ChevronRight size={32} strokeWidth={1} />
          </button>
        </div>

        {/* Content Side */}
        <div className="md:w-2/5 p-8 md:p-16 flex flex-col justify-center gap-10">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[4px] text-brand-blue font-black">Limited Edition</span>
            <h2 className="text-4xl md:text-6xl font-black lowercase tracking-tighter">
              {product.name}
            </h2>
            <p className="text-2xl font-black text-brand-muted uppercase tracking-tighter italic">{product.price}</p>
          </div>

          <div className="space-y-6">
            <p className="text-brand-muted leading-relaxed font-medium uppercase text-xs tracking-tight">
              {product.description}
            </p>
            
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[2px] font-black underline underline-offset-4">Select Size</span>
              <div className="flex gap-3">
                {['XS', 'S', 'M', 'L'].map(size => (
                  <button key={size} className="w-12 h-12 flex items-center justify-center border border-brand-line text-[10px] font-black hover:bg-brand-blue hover:text-white transition-all duration-300">
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button className="w-full bg-brand-ink text-white py-6 uppercase tracking-[4px] text-[10px] font-black hover:bg-brand-blue transition-colors duration-500">
            Add To Cart
          </button>

          <div className="pt-4 border-t border-brand-ink/5">
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold opacity-40">
              <span>View Details</span>
              <span>Delivery & Returns</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
