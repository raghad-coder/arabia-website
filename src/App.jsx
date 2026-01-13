import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import ProgressBar from './components/ProgressBar'; // سننشئه الآن
import Work from './sections/Work';
import Clients from './sections/Clients';

function App() {
  useEffect(() => {
    // إعداد مكتبة Lenis للتمرير الناعم
    const lenis = new Lenis({
      duration: 1.2,   // سرعة التمرير
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // معادلة الحركة الانسيابية
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // تنظيف المكتبة عند إغلاق المكون
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-enso-dark w-full min-h-screen">
      <ProgressBar />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Clients />
      <Stats />
      {/* سنضيف أقساماً أخرى هنا لاحقاً لكي تشعر بقوة التمرير */}
      <div className="h-[200vh]"></div> 
    </main>
  );
}

export default App;