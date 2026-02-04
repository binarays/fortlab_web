import { useState, useEffect } from 'react';
import { Instagram, Linkedin, Send } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import { SkeletonCard } from '../SkeletonLoader';

import prabashanaImg from '../../assets/team/Prabashana.jpeg';
import miuruImg from '../../assets/team/Miuru FDO.jpeg';
import nimodhImg from '../../assets/team/Nimodh.jpeg';

const team = [
  {
    name: 'Supun Prabhashana',
    role: 'Lead Producer',
    image: prabashanaImg,
    bio: 'Supun Prabhashana is the founder of Fort Lab and an indie music composer and producer in the Sri Lankan music industry. He has worked with artists like Mahiru Senarathne and Kavishanke Adithya, handling music production, composition, and mix & mastering with a unique blend of cinematic and Sri Lankan sounds.',
  },
  {
    name: 'Miuru Fernando',
    role: 'Sound Engineer',
    image: miuruImg,
    bio: 'Miuru Fernando is a Sri Lankan multi-instrumentalist with 15+ years of experience and an ABRSM-registered tutor. Known for his advanced technical understanding of audio engineering, he shapes the sonic identity of Fort Lab through intricate string arrangements and musicality.',
  },
  {
    name: 'Nimodh Ruwantha',
    role: 'Composer & Creative Lead',
    image: nimodhImg,
    bio: 'Nimodh Ruwantha is a professional recording session player with 8+ years of experience, specializing in funk and pop. At Fort Lab, Nimodh is the creative force behind all drum and percussion arrangements, bringing groove, energy, and precision to every production.',
  },
];

export default function Team() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="team" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-[#E7E8BF]">Team</span>
            </h2>
          </div>
        </SectionWrapper>

        <div className="space-y-12 max-w-5xl mx-auto">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <SkeletonCard />
              </SectionWrapper>
            ))
            : team.map((member, index) => (
              <SectionWrapper key={member.name} delay={index * 0.1}>
                <div className="group flex flex-col md:flex-row bg-[#0A0D14] overflow-hidden rounded-sm border border-white/5 hover:border-white/10 transition-colors duration-500">
                  <div className="md:w-1/2 aspect-square md:aspect-auto h-80 md:h-[450px] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#E7E8BF]/5 rounded-full blur-3xl -mr-16 -mt-16" />

                    <div className="relative z-10">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-[#E7E8BF] font-medium mb-12 uppercase tracking-[0.2em] text-sm">
                        {member.role}
                      </p>

                      <div className="mb-10">
                        <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 font-semibold">
                          About {member.name.split(' ')[0]}
                        </p>
                        <p className="text-gray-400 font-light leading-relaxed text-base">
                          {member.bio}
                        </p>
                      </div>

                      <div className="flex items-center gap-6 mt-auto">
                        <a href="#" className="text-white/60 hover:text-[#E7E8BF] transition-colors duration-300">
                          <Send size={22} strokeWidth={1.5} />
                        </a>
                        <a href="#" className="text-white/60 hover:text-[#E7E8BF] transition-colors duration-300">
                          <Instagram size={22} strokeWidth={1.5} />
                        </a>
                        <a href="#" className="text-white/60 hover:text-[#E7E8BF] transition-colors duration-300">
                          <Linkedin size={22} strokeWidth={1.5} />
                        </a>
                      </div>
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
