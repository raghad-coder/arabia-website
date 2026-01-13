import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';

// استيراد المكونات والأقسام (تأكد من صحة المسارات)
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import Work from './sections/Work';
import Clients from './sections/Clients';
import Testimonials from './sections/Testimonials';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // تقليل الوقت لـ 1.5 ثانية لجعلها "سريعة"
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-enso-dark min-h-screen selection:bg-enso-green selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loader" />
        ) : (
          <motion.main 
            key="content"
            initial={{ opacity: 0, filter: "blur(10px)" }} // يبدأ "مضبب" لزيادة السلاسة
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full"
          >
            <ProgressBar />
            <Navbar />
            <Hero />
            <About />
            <Work />
            <Clients />
            <Stats />
            <Testimonials />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;