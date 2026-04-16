import { motion } from 'motion/react';

export default function MoodSection() {
  return (
    <section className="py-24 md:py-40 px-8 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative group"
      >
        <div className="aspect-[3/4] overflow-hidden bg-brand-sage/20">
          <img 
            src="https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?auto=format&fit=crop&q=80&w=800"
            alt="Fabric detail"
            className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-brand-gold/20 -z-10 hidden md:block" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-8"
      >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[4px] text-brand-orange font-bold">The Philosophy</span>
          <h2 className="text-6xl md:text-8xl leading-none font-black tracking-tighter lowercase">
            not just <br />sportswear
          </h2>
        </div>
        
        <p className="text-sm md:text-base leading-relaxed text-brand-muted font-medium uppercase tracking-tight max-w-sm">
          Designed for movement, styled for presence. Pieces that feel as effortless as they look — on and off the court.
        </p>

        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-dashed border-brand-line">
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase font-black tracking-widest text-brand-orange">Heritage //</h4>
            <p className="text-xs text-brand-ink font-medium uppercase leading-tight">Crafted in Italy using artisanal techniques passed down through generations.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase font-black tracking-widest text-brand-orange">Innovation //</h4>
            <p className="text-xs text-brand-ink font-medium uppercase leading-tight">Custom developed fibers that breathe and adapt to your body's rhythm.</p>
          </div>
        </div>
      </motion.div>
      </motion.div>
    </section>
  );
}
