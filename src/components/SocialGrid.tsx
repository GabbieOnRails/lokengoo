import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Instagram } from 'lucide-react';

const COMMUNITY_IMAGES = [
  "https://i.ibb.co/Lz8qQMdN/Project-Mar-17-02-18-PM-1-3.png",
  "https://i.ibb.co/S4hpgFQk/Project-Mar-17-02-18-PM-1.png",
  "https://i.ibb.co/MyCxqPDJ/Project-Mar-17-02-18-PM-2-1.png",
  "https://i.ibb.co/WvWJnyrJ/Project-Mar-17-02-18-PM-2.png",
  "https://i.ibb.co/rggDnxj/Project-Mar-17-02-18-PM-3.png",
  "https://i.ibb.co/Ld09PLc5/Project-Mar-17-02-18-PM-4.png",
  "https://i.ibb.co/LzyQBBJ9/Project-Mar-17-02-18-PM-5.png",
  "https://i.ibb.co/cSXygYVq/Project-Mar-17-02-18-PM-1.png",
  "https://i.ibb.co/YF4kyV7H/Project-Mar-17-02-18-PM-2.png",
  "https://i.ibb.co/7dqp9Zrf/Project-Mar-17-02-18-PM-3.png",
];

export default function SocialGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = useMemo(() => {
    return COMMUNITY_IMAGES.map((url, i) => ({
      url,
      id: `court-social-${i}`
    }));
  }, []);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const getVisibleImages = () => {
    const items = [];
    if (images.length === 0) return items;
    // Show 5 images: 2 before, center, 2 after
    for (let i = -2; i <= 2; i++) {
        const index = (currentIndex + i + images.length) % images.length;
        items.push({ ...images[index], offset: i });
    }
    return items;
  };

  return (
    <section className="py-24 bg-brand-cream relative border-t border-dashed border-brand-line overflow-hidden uppercase">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <span className="text-[10px] uppercase tracking-[4px] font-black text-brand-blue">Community</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter lowercase leading-[0.8]">seen on <br />the court.</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-end gap-4"
          >
             <div className="flex items-center gap-2 text-brand-ink/40 font-bold tracking-[3px] text-[10px]">
                <Instagram size={14} />
                <span>@lokengoo</span>
             </div>
             <p className="max-w-[280px] text-right text-[10px] font-bold text-brand-ink/60 leading-relaxed tracking-widest">
                Join our collective of modern athletes and style icons globally. <br />
                Captured by the community.
             </p>
          </motion.div>
        </div>

        {/* 3D Stacking Carousel */}
        <div className="relative h-[450px] md:h-[650px] flex items-center justify-center">
            <AnimatePresence initial={false}>
                {getVisibleImages().map((img) => (
                    <motion.div
                        key={img.id}
                        initial={{ opacity: 0, x: img.offset > 0 ? 600 : -600, scale: 0.8 }}
                        animate={{ 
                            opacity: 1 - Math.abs(img.offset) * 0.35,
                            x: img.offset * (typeof window !== 'undefined' && window.innerWidth < 1024 ? 130 : 340),
                            zIndex: 10 - Math.abs(img.offset),
                            scale: img.offset === 0 ? 1 : 0.82
                        }}
                        exit={{ opacity: 0, x: img.offset > 0 ? -600 : 600, scale: 0.8 }}
                        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute w-full flex justify-center pointer-events-none md:pointer-events-auto"
                    >
                        <div className={`
                            ${img.offset === 0 ? 'w-[280px] md:w-[440px] h-[380px] md:h-[580px]' : 'w-[200px] md:w-[320px] h-[280px] md:h-[420px]'}
                            bg-white border border-brand-line p-2 md:p-4 rounded-[40px] shadow-2xl overflow-hidden relative
                        `}>
                            <img 
                                src={img.url} 
                                alt="Community Style"
                                className={`w-full h-full object-cover rounded-[32px] ${img.offset !== 0 ? 'grayscale opacity-50' : ''} transition-all duration-700`}
                                referrerPolicy="no-referrer"
                            />
                            {img.offset === 0 && (
                                <div className="absolute inset-x-8 bottom-8 flex justify-center">
                                    <div className="bg-white/95 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-brand-line">
                                        <p className="text-[10px] font-black tracking-[2px] text-brand-ink uppercase">Court Identity</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>

        {/* Navigation Controllers */}
        <div className="mt-12 md:mt-16 flex justify-center items-center gap-8">
            <button 
                onClick={handlePrev}
                className="w-14 h-14 rounded-full border border-brand-line flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all bg-white shadow-sm hover:scale-110 active:scale-95"
            >
                <ArrowLeft size={24} />
            </button>
            <button 
                onClick={handleNext}
                className="w-14 h-14 rounded-full border border-brand-line flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all bg-white shadow-sm hover:scale-110 active:scale-95"
            >
                <ArrowRight size={24} />
            </button>
        </div>
      </div>
    </section>
  );
}
