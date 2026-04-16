import { motion } from 'motion/react';
import { ArrowUpRight, Globe, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white pt-24 pb-12 px-8 md:px-20">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Left Section: Geometric Image */}
        <div className="lg:col-span-5 relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-square md:aspect-video lg:aspect-square overflow-hidden"
            style={{ 
              clipPath: 'polygon(0% 15%, 15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)' 
            }}
          >
            <img 
              src="https://i.ibb.co/JWXPWnxy/Project-Mar-17-02-18-PM-1.png"
              alt="The Court Vision"
              className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay" />
          </motion.div>
        </div>

        {/* Middle Section: Drops & CTA */}
        <div className="lg:col-span-4 flex flex-col justify-center h-full space-y-10">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter lowercase">
              court <br />drops
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Exclusive', 'Limited Edition', 'Collector\'s Item', 'AW26 Campaign'].map((tag) => (
                <span key={tag} className="px-3 py-1 border border-white/20 rounded-full text-[9px] uppercase tracking-widest font-bold text-white/60">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group w-fit bg-white text-brand-ink px-10 py-5 rounded-full flex items-center gap-4 transition-all duration-300 hover:bg-brand-blue hover:text-white"
          >
            <span className="text-[10px] font-black uppercase tracking-[4px]">Check Drops</span>
            <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center group-hover:bg-white group-hover:text-brand-blue transition-colors">
              <ArrowUpRight size={14} />
            </div>
          </motion.button>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="lg:col-span-3 grid grid-cols-2 gap-12 h-full py-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-widest font-black text-white/30">Quick Links</h4>
              <ul className="flex flex-col gap-3 text-xs font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-brand-blue transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Collections</a></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-widest font-black text-white/30">Info.Log</h4>
              <ul className="flex flex-col gap-3 text-xs font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-brand-blue transition-colors">About</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-widest font-black text-white/30">Contact Us</h4>
              <ul className="flex flex-col gap-4 text-[11px] font-bold uppercase tracking-tight text-white/60">
                <li className="flex items-center gap-3">
                  <Phone size={12} className="text-brand-blue" />
                  <span>+234 (0) 800 COURT</span>
                </li>
                <li className="flex items-center gap-3 lowercase">
                  <Mail size={12} className="text-brand-blue" />
                  <span>hello@thecourt.com</span>
                </li>
                <li className="flex items-start gap-3 border-t border-white/5 pt-4 mt-2">
                  <Globe size={14} className="text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-white/40">Lekki, Lagos <br />Nigeria</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1600px] mx-auto mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-8 text-[9px] uppercase tracking-widest font-black text-white/20">
          <span>© 2026 The Court</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black italic">the court.</span>
            <span className="text-[8px] uppercase tracking-[3px] text-white/30">High Performance Elegance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
