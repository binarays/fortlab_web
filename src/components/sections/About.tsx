import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import SkeletonLoader from '../SkeletonLoader';
import aboutImg from '../../assets/aboutus/aboutus.jpeg';

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              {isLoading ? (
                <>
                  <SkeletonLoader variant="text" className="w-1/3 h-8 mb-6" />
                  <SkeletonLoader variant="text" className="mb-4" />
                  <SkeletonLoader variant="text" className="mb-4" />
                  <SkeletonLoader variant="text" className="w-3/4" />
                </>
              ) : (
                <>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    About <span className="text-[#E7E8BF]">Us</span>
                  </h2>
                  <p className="text-lg text-gray-400 font-light leading-relaxed mb-6">
                    We are a dedicated team of experienced music producers, sound engineers, and creative artists focused on transforming ideas into compelling sonic experiences. With years of industry expertise, we have collaborated with a diverse range of artists, brands, and creators across multiple genres.
                  </p>
                  <p className="text-lg text-gray-400 font-light leading-relaxed mb-10">
                    At the core of our studio is a commitment to innovation, quality, and artistic integrity. We combine cutting-edge technology with refined creative processes to deliver polished, impactful results tailored to each project’s unique vision.
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#E7E8BF] text-black font-bold rounded-full hover:bg-white transition-all duration-300 group"
                  >
                    READ MORE
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              )}
            </div>

            <div className="relative">
              {isLoading ? (
                <SkeletonLoader variant="image" className="h-96 rounded-lg" />
              ) : (
                <div className="relative">
                  <div className="absolute inset-0 bg-[#E7E8BF] opacity-20 rounded-lg transition-transform duration-500" />
                  <img
                    src={aboutImg}
                    alt="Music Studio"
                    className="relative rounded-lg shadow-2xl w-full h-96 object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 border-2 border-[#E7E8BF] rounded-lg transform translate-x-4 translate-y-4 -z-10" />
                </div>
              )}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
