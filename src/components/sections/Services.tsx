import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Disc3, Radio, Film } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import { SkeletonCard } from '../SkeletonLoader';

const services = [
  {
    icon: Music,
    title: 'Music Production',
    price: '100,000 +',
    description:
      'We create complete songs from scratch composing, arranging, and producing music that matches your style and vision.',
  },
  {
    icon: Disc3,
    title: 'Mixing & Mastering',
    price: '25,000 +',
    description:
      'Your track gets a professional finish with clean balance, clarity, and loudness, ready for streaming, radio, or any platform.',
  },
  {
    icon: Radio,
    title: 'Commercial Audio Production',
    price: '80,000 +',
    description:
      'From jingles to brand audio, we produce high-quality sound for ads, corporate videos, and any commercial project.',
  },
  {
    icon: Film,
    title: 'Film Scores & Sound Designing',
    price: '120,000 +',
    description:
      'We craft original background scores, sound effects, and atmospheres to bring stories, visuals, and emotions to life.',
  },
];

export default function Services() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="services" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-[#E7E8BF]">Services</span>
            </h2>
          </div>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <SkeletonCard />
              </SectionWrapper>
            ))
            : services.map((service, index) => (
              <SectionWrapper key={service.title} delay={index * 0.1}>
                <div className="group relative bg-zinc-900/30 border border-gray-800/50 p-10 flex flex-col items-center text-center transition-all duration-500 hover:border-[#E7E8BF]/30 hover:shadow-2xl rounded-3xl h-full">
                  <div className="mb-10 p-5 rounded-full bg-[#E7E8BF]/10 text-[#E7E8BF] group-hover:bg-[#E7E8BF] group-hover:text-black transition-all duration-500">
                    <service.icon className="w-10 h-10" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-base leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-8 flex items-center justify-between w-full border-t border-gray-800/20">
                    <div className="flex flex-col items-start text-left">
                      <span className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">Starting from</span>
                      <span className="text-[#E7E8BF] text-xl font-bold">LKR {service.price}</span>
                    </div>
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(231, 232, 191, 0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 bg-[#E7E8BF] text-black text-xs font-black rounded-full transition-all duration-300 tracking-widest"
                    >
                      BOOK NOW
                    </motion.a>
                  </div>
                </div>
              </SectionWrapper>
            ))}
        </div>
      </div>
    </section>
  );
}
