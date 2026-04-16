import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ShoppingBag, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Navbar() {
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-line"
      >
        <div className="flex justify-between items-center h-20 md:h-24 px-6 md:px-16 max-w-[1600px] mx-auto">
          {/* Left: Menu Toggle for Mobile / Info for Desktop */}
          <div className="flex-1 flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 hover:bg-brand-cream rounded-full transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center transform hover:scale-105 transition-transform duration-500">
            <Link to="/" className="text-2xl md:text-3xl font-black tracking-tighter lowercase flex items-center gap-1">
              Lokengoo<span className="text-brand-blue">.</span>
            </Link>
          </div>

          {/* Right: Icons */}
          <div className="flex-1 flex justify-end items-center gap-4 md:gap-8">
            <a 
              href="https://www.instagram.com/lokengoo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:text-brand-blue transition-colors group"
            >
              <Instagram size={18} className="group-hover:scale-110 transition-transform" />
            </a>

            <Link to="/" className="relative p-2 hover:text-brand-blue transition-colors group">
              <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-0 right-0 w-4 h-4 bg-brand-blue text-white text-[8px] font-black flex items-center justify-center rounded-full border-2 border-white"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-ink/40 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 left-0 w-full max-w-sm bg-white z-[101] p-12 flex flex-col justify-between"
            >
              <div className="space-y-12">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-[4px] text-brand-blue">Menu</span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2">
                    <X size={24} />
                  </button>
                </div>

                <nav className="space-y-8">
                  {['Collection', 'About', 'Contact', 'Archive'].map((item) => (
                    <Link
                      key={item}
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-4xl font-black lowercase tracking-tighter hover:text-brand-blue transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <Instagram size={20} />
                  <span className="text-[10px] font-black uppercase tracking-[4px]">@lokengoo</span>
                </div>
                <p className="text-[10px] font-bold text-brand-muted uppercase leading-relaxed tracking-widest">
                  Elevating your daily routine on and off the court.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
