import { useState, useEffect } from 'react';
import SectionWrapper from '../SectionWrapper';
import { SkeletonCard } from '../SkeletonLoader';

const team = [
  {
    name: 'Prabhashana',
    role: 'Lead Producer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Miuru FDO',
    role: 'Sound Engineer',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Kavishanke Adithya',
    role: 'Composer',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Team() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-[#E7E8BF]">Team</span>
            </h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Meet the creative minds behind our productions
            </p>
          </div>
        </SectionWrapper>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <SectionWrapper key={i} delay={i * 0.1}>
                  <SkeletonCard />
                </SectionWrapper>
              ))
            : team.map((member, index) => (
                <SectionWrapper key={member.name} delay={index * 0.1}>
                  <div className="group relative bg-black border border-gray-800 overflow-hidden hover:border-[#E7E8BF] transition-all duration-500">
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="w-12 h-0.5 bg-[#E7E8BF] mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          {member.name}
                        </h3>
                        <p className="text-[#E7E8BF] font-light">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </SectionWrapper>
              ))}
        </div>
      </div>
    </section>
  );
}
