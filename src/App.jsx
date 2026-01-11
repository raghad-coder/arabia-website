import Navbar from './components/Navbar';

function App() {
  return (
    <main className="relative min-h-screen bg-enso-dark">
      <Navbar />
      
      {/* هنا سنضع الهيرو سيكشن لاحقاً */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold text-center">
          Creating <br />
          <span className="text-enso-green">Transformative</span> <br />
          Experiences
        </h1>
      </section>
    </main>
  )
}

export default App;