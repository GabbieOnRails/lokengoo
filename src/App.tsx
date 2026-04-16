/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import CollectionGrid from './components/CollectionGrid';
import SocialGrid from './components/SocialGrid';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import Collection from './pages/Collection';
import { motion, useScroll, useSpring } from 'motion/react';

function HomePage() {
  return (
    <main>
      <Hero />
      <StorySection />
      <div className="bg-brand-cream/30">
        <CollectionGrid />
      </div>
      <SocialGrid />
    </main>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <CartProvider>
      <Router>
        <div className="relative overflow-x-hidden selection:bg-brand-gold/30">
          {/* Scroll Progress Indicator */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-brand-gold origin-left z-[100]"
            style={{ scaleX }}
          />

          <Navbar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
