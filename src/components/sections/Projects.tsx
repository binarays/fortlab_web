import { useState, useEffect } from 'react';
import SectionWrapper from '../SectionWrapper';

// Import images
import heenaPaanaImg from '../../assets/artworks/Heena paarana.jpeg';
import pamaNowuImg from '../../assets/artworks/Pama Nowu.jpeg';
import detholImg from '../../assets/artworks/Dethol.jpeg';
import handaaWaruImg from '../../assets/artworks/Handaa Waru Ganan.png';
import ashaMalImg from '../../assets/artworks/Aahaamal.jpeg';
import asillakImg from '../../assets/artworks/Asillak.png';
import mandaramImg from '../../assets/artworks/Mandaram.jpeg';

const projects = [
  {
    title: 'Heena Paana',
    artist: 'BANURA • Miran Archana • Prabashana',
    year: '2026',
    image: heenaPaanaImg,
  },
  {
    title: 'Pama Nowu Ma Adare',
    artist: 'Mahiru Senarathne • Prabashana',
    year: '2025',
    image: pamaNowuImg,
  },
  {
    title: 'Dethol',
    artist: 'Kavishanke Adithya • Prabhashana',
    year: '2025',
    image: detholImg,
  },
  {
    title: 'Handaa Waru Ganan',
    artist: 'Sandun Mahesh Nangallage • Prabhashana',
    year: '2025',
    image: handaaWaruImg,
  },
  {
    title: 'Asha Mal',
    artist: 'Rohan De Silva • Hector Wijesiri • Prabhashana',
    year: '2024',
    image: ashaMalImg,
  },
  {
    title: 'Asillak',
    artist: 'Sandun Mahesh Nangallage • Prabhashana',
    year: '2023',
    image: asillakImg,
  },
  {
    title: 'Robarosiyan',
    artist: 'Miran Archana • Prabhashana',
    year: '2023',
    image: heenaPaanaImg,
  },
  {
    title: 'Mandaram',
    artist: 'Sandun Mahesh Nangallage • Prabhashana',
    year: '2022',
    image: mandaramImg,
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <div className="w-[300px] md:w-[400px] flex-shrink-0 mx-4">
    <div className="group relative overflow-hidden bg-zinc-900/50 border border-gray-800 hover:border-[#E7E8BF] transition-all duration-500 rounded-2xl">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#E7E8BF] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-base md:text-lg text-gray-300 mb-1 font-medium">
          {project.artist}
        </p>
        <p className="text-sm md:text-base text-gray-500 font-light">
          {project.year}
        </p>
      </div>
    </div>
  </div>
);

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const row1 = projects.slice(0, 4);
  const row2 = projects.slice(4, 8);

  if (isLoading) {
    return (
      <section className="py-32 px-6 bg-black min-h-screen flex items-center justify-center">
        <div className="text-[#E7E8BF] text-2xl font-light tracking-widest animate-pulse">
          LOADING PROJECTS...
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <SectionWrapper>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-[#E7E8BF]">Projects</span>
          </h2>
        </SectionWrapper>
      </div>

      <div className="relative space-y-12">
        {/* Row 1 - Right to Left */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...row1, ...row1].map((project, idx) => (
              <ProjectCard key={`${project.title}-${idx}`} project={project} />
            ))}
          </div>
        </div>

        {/* Row 2 - Left to Right */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...row2, ...row2].map((project, idx) => (
              <ProjectCard key={`${project.title}-${idx}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

