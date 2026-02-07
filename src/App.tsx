import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/common/Navbar';
import Footer from './components/sections/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';
import SpotifyPlayer from './components/SpotifyPlayer';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppPopup from './components/WhatsAppPopup';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename="/fortlab_web/">
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-black">
          <Navbar />
          <SpotifyPlayer />
          <ScrollToTopButton />
          <WhatsAppPopup />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
