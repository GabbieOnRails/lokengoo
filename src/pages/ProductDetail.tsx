import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../types';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Minus, ShoppingBag, Instagram, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = PRODUCTS.find((p) => p.id === productId);
  const { addToCart } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center bg-brand-cream">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black lowercase tracking-tighter">Product not found.</h2>
          <Link to="/" className="text-[10px] uppercase tracking-[4px] font-black underline underline-offset-8">Return Home</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-blue/20">
      <Navbar />
      
      <main className="pt-32 pb-24 px-8 md:px-20 max-w-[1600px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[4px] font-black mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          {/* Gallery Sticky Side */}
          <div className="lg:col-span-7 space-y-6">
            <div className="aspect-[4/5] bg-white border border-brand-line overflow-hidden relative group">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                src={product.gallery[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute top-8 left-8">
                 <span className="bg-brand-blue text-white text-[8px] font-black uppercase tracking-[4px] px-4 py-2 rounded-full border border-white/20">
                    Premium Selection
                 </span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square border transition-all duration-500 overflow-hidden ${
                    activeImage === i ? 'border-brand-blue p-1' : 'border-brand-line'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                   <div className="h-px w-8 bg-brand-blue" />
                   <span className="text-[10px] uppercase tracking-[4px] font-black text-brand-blue">Seen on the court</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter lowercase leading-[0.8]">
                  {product.name}
                </h1>
                <p className="text-3xl font-black text-brand-ink/40 tracking-tighter uppercase italic">{product.price}</p>
              </div>

              <p className="text-sm md:text-base leading-relaxed text-brand-muted font-medium uppercase tracking-tight max-w-md">
                {product.description}
              </p>

              <div className="space-y-8">
                 <div className="space-y-4">
                    <span className="text-[10px] uppercase tracking-[4px] font-black text-brand-ink underline underline-offset-8 decoration-brand-blue/30">Select Size</span>
                    <div className="flex gap-4">
                      {['XS', 'S', 'M', 'L'].map(size => (
                        <button key={size} className="w-16 h-16 border border-brand-line text-[10px] font-black hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-500 uppercase">
                          {size}
                        </button>
                      ))}
                    </div>
                 </div>

                 <button 
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={`w-full py-8 uppercase tracking-[6px] text-[10px] font-black flex items-center justify-center gap-4 transition-all duration-700 relative overflow-hidden ${
                    isAdded ? 'bg-brand-blue text-white' : 'bg-brand-ink text-white hover:bg-brand-blue'
                  }`}
                 >
                   {isAdded ? (
                     <motion.span initial={{ y: 20 }} animate={{ y: 0 }}>Added to bag</motion.span>
                   ) : (
                     <span className="flex items-center gap-3">
                        Add to selection <ShoppingBag size={14} />
                     </span>
                   )}
                 </button>
              </div>

              <div className="pt-12 border-t border-brand-line space-y-12">
                 <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <h4 className="text-[10px] uppercase font-black tracking-widest text-brand-blue">Composition //</h4>
                       <p className="text-[10px] text-brand-muted font-bold uppercase leading-tight">82% Recycled Polyester <br />18% Elastane</p>
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-[10px] uppercase font-black tracking-widest text-brand-blue">Shipping //</h4>
                       <p className="text-[10px] text-brand-muted font-bold uppercase leading-tight">Complementary global <br />delivery on all orders</p>
                    </div>
                 </div>

                 <div className="flex items-center gap-6">
                    <Instagram size={18} className="text-brand-ink/30" />
                    <span className="text-[10px] font-black tracking-widest text-brand-ink/30 uppercase italic">Join the collective</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Suggestion Section */}
        <div className="mt-40 pt-24 border-t border-dashed border-brand-line">
            <h3 className="text-4xl md:text-6xl font-black lowercase tracking-tighter mb-16 underline decoration-brand-blue decoration-2 underline-offset-8">Complement your look</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {PRODUCTS.filter(p => p.id !== product.id).slice(0, 3).map(p => (
                 <Link key={p.id} to={`/product/${p.id}`} className="group space-y-6">
                    <div className="aspect-[3/4] overflow-hidden border border-brand-line p-2 bg-white">
                       <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex justify-between items-end">
                       <div>
                          <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold mb-1">{p.category}</p>
                          <h4 className="text-sm font-black uppercase tracking-tight">{p.name}</h4>
                       </div>
                       <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                 </Link>
               ))}
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
