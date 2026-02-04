import { useState, useEffect } from 'react';
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
                    We are a team of passionate music producers, sound engineers, and creative
                    artists dedicated to transforming ideas into sonic masterpieces.
                  </p>
                  <p className="text-lg text-gray-400 font-light leading-relaxed">
                    With years of experience in the industry, we've worked with artists across
                    genres, creating everything from chart-topping hits to powerful film scores.
                    Our studio is where innovation meets artistry.
                  </p>
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
