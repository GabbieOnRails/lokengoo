import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img 
          src="https://i.ibb.co/C5zJ19sL/Project-Mar-17-02-18-PM-10.png"
          alt="Tennis court excellence"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-ink/30 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-8 max-w-6xl space-y-12">
        <motion.p
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-[126px] font-black leading-[0.75] tracking-tighter lowercase drop-shadow-2xl"
        >
          game. set. <br />match.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
           className="flex justify-center"
        >
           <Link to="/collection" className="bg-white text-brand-ink px-12 py-5 text-[10px] font-black uppercase tracking-[4px] hover:bg-brand-blue hover:text-white transition-all duration-500 shadow-xl inline-block">
              Own the Court
           </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 right-0 w-full md:w-[400px] h-20 bg-brand-blue text-white flex items-center px-10 font-black uppercase text-[10px] tracking-[4px] z-20"
      >
        // your game, your rules
      </motion.div>
    </section>
  );
}
