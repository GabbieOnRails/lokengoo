import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:h-screen w-full bg-[#EBEBEB] overflow-hidden pt-36 pb-12 lg:pt-32 lg:pb-20">
      {/* Background Dashed Lines */}
      <div className="absolute inset-x-0 top-0 h-full grid grid-cols-3 pointer-events-none">
        <div className="border-r border-dashed border-black/10 h-full" />
        <div className="border-r border-dashed border-black/10 h-full" />
      </div>

      {/* Center Background Image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <img 
            src="https://i.ibb.co/Z60C7pMP/Gemini-Generated-Image-l0wjxbl0wjxbl0wj.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 min-h-[60vh] h-full items-center">
        {/* Left Column */}
        <motion.div 
          initial={{ x: -100, opacity: 0, filter: 'blur(10px)' }}
          animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between px-8 lg:px-16 py-8 lg:py-12 h-full"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-[153px] xl:text-[170px] leading-[0.8] font-black tracking-tighter lowercase -ml-1 lg:-ml-2">
            the <br />court.
          </h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6 lg:space-y-12 mt-8 lg:mt-0"
          >
            <span className="text-[12px] lg:text-[14px] font-bold text-black tracking-widest leading-none">[@2026]</span>
            <p className="max-w-[280px] text-[11px] lg:text-[13px] text-black leading-relaxed font-bold uppercase tracking-tight">
              Show up to the tennis court or padel court looking too good to ignore. because serving looks is part of the game!
            </p>
          </motion.div>
        </motion.div>

        {/* Center Column */}
        <div className="flex items-center justify-center py-8 lg:py-12 relative h-full">
           <motion.div 
             initial={{ scale: 0.8, opacity: 0, y: 40 }}
             animate={{ scale: 1, opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
             className="w-56 h-[350px] lg:w-80 lg:h-[500px] bg-brand-cream border border-brand-line shadow-2xl overflow-hidden rounded-full p-2"
           >
              <img 
                src="https://i.ibb.co/F4RVBqKy/Gemini-Generated-Image-ovkm4wovkm4wovkm-1.png" 
                alt="Featured Look" 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
           </motion.div>
        </div>

        {/* Right Column */}
        <motion.div 
          initial={{ x: 100, opacity: 0, filter: 'blur(10px)' }}
          animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between px-8 lg:px-16 py-8 lg:py-12 h-full relative"
        >
          <div className="space-y-6 lg:space-y-8 mt-8 lg:mt-12">
            <h1 className="text-4xl sm:text-5xl lg:text-[127px] xl:text-[140px] leading-[0.9] font-black tracking-tighter lowercase flex flex-col">
              <span>elegance</span>
              <span className="text-brand-blue">meets play</span>
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="space-y-6 lg:space-y-8 pt-4 lg:pt-8 flex flex-col items-start gap-8"
            >
               <Link to="/collection" className="group relative py-4 px-10 bg-brand-ink text-white overflow-hidden transition-all duration-500 hover:pr-14 active:scale-95 inline-block">
                  <span className="relative z-10 text-[10px] lg:text-[12px] font-black uppercase tracking-[4px]">Explore Collection</span>
                  <div className="absolute inset-0 bg-brand-blue translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                    <ArrowDown size={14} className="-rotate-90" />
                  </div>
               </Link>

               <div className="flex flex-col gap-2">
                  <span className="text-[10px] lg:text-[12px] font-bold text-black tracking-widest leading-none">// EST. 2026</span>
               </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="max-w-[200px] self-end text-right mt-8 lg:mt-0"
          >
            <p className="text-[10px] lg:text-[11px] text-black font-bold leading-tight uppercase tracking-tight">
              Step into effortless elegance with The Court.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
