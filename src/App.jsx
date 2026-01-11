import Navbar from './components/Navbar';
import Hero from './sections/Hero'; // استيراد الهيرو
import Stats from './sections/Stats';

function App() {
  return (
    <main className="bg-enso-dark">
      <Navbar />
      <Hero />
      <Stats />
      
      {/* الأقسام القادمة ستوضع هنا */}
      <div className="h-[50vh]"></div> {/* مساحة مؤقتة للتجربة */}
    </main>
  )
}

export default App;