import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-black">
          <Hero />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <Team />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
