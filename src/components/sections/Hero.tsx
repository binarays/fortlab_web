import { motion } from 'framer-motion';
import backgroundImage from '../../assets/background/fortlab_background.jpg';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <div className="absolute inset-0 opacity-10 z-[2]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E7E8BF] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E7E8BF] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight mt-0 md:mt-10 drop-shadow-2xl"
          style={{ textShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
        >
          Where your sound finally
          <span className="block text-[#E7E8BF] mt-2">feels right.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-200 mb-8 font-light max-w-2xl mx-auto drop-shadow-lg"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
        >
          A cosy home studio where we create music productions, mix & masters, and craft film scores and commercial scores.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <motion.a
            href="#projects"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-10 py-4 border border-white/20 text-white font-bold text-lg backdrop-blur-sm transition-all duration-300 transform text-center"
          >
            EXPLORE
          </motion.a>

          <motion.a
            href="#services"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(231, 232, 191, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-10 py-4 font-bold text-lg transition-all duration-300 transform text-center"
            style={{
              backgroundColor: '#E7E8BF',
              color: '#000000',
              border: '2px solid #E7E8BF'
            }}
          >
            BOOK NOW
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
