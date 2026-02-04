import { useState, useEffect, useRef } from 'react';
import SectionWrapper from '../SectionWrapper';
import { SkeletonCard } from '../SkeletonLoader';

const testimonials = [
  {
    name: 'Banura Sathurusinghe',
    role: 'Recording Artist & Producer',
    review:
      'The lovely team at Fort Lab has provided our project with significant leverage. Their work is exceptionally professional, and Supun is always attentive to our needs, taking the time to understand our briefs and offer valuable direction.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Banura',
  },
  {
    name: 'Miran Archana',
    role: 'Composer & Musician',
    review:
      'Professional, creative, and incredibly talented. They brought our vision to life beyond our expectations. Their turnaround times are impressively fast, and the sonic quality is simply world-class.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Miran',
  },
  {
    name: 'Manula Nipun',
    role: 'Indie Artist',
    review:
      'Working with Fort Lab transformed our sound completely. The attention to detail and creative direction was exceptional. Every track sounds pristine, radio-ready, and carries a unique character.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Manula',
  },
  {
    name: 'Kushan FDO',
    role: 'Film Director',
    review:
      'Their film scoring work added so much depth and emotion to our project. Truly remarkable artists who understand the language of cinema and sound perfectly. A pleasure to collaborate with.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kushan',
  },
  {
    name: 'Miuru Fernando',
    role: 'Professional Cellist',
    review:
      'From start to finish, the production process was smooth and the results were absolutely stunning. Their technical understanding and artistic sensibility make them stand out in the industry.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Miuru',
  },
  {
    name: 'Mahiru Senarathne',
    role: 'Vocalist',
    review:
      'An incredible team that understands music at its core. They deliver excellence every single time, ensuring the artist\'s original vision is preserved while being elevated to professional standards.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mahiru',
  },
];

export default function Testimonials() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);

    const handleWheel = (e: WheelEvent) => {
      if (!scrollRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const isScrollingLeft = e.deltaY < 0;
      const isScrollingRight = e.deltaY > 0;

      const canScrollLeft = scrollLeft > 0;
      const canScrollRight = scrollLeft < scrollWidth - clientWidth - 1; // -1 for sub-pixel issues

      if ((isScrollingLeft && canScrollLeft) || (isScrollingRight && canScrollRight)) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      clearTimeout(timer);
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionWrapper>
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Voices of <span className="text-[#E7E8BF]">Collaboration</span>
            </h2>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
              Our clients are our greatest collaborators. Here's what they say about their experience at Fort Lab.
            </p>
          </div>
        </SectionWrapper>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 pb-20 snap-x snap-mandatory hide-scrollbar select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] px-[10vw] md:px-[20vw]"
      >
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="min-w-[350px] md:min-w-[450px] snap-center">
              <SectionWrapper delay={i * 0.1} className="h-full w-full">
                <SkeletonCard />
              </SectionWrapper>
            </div>
          ))
          : testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="min-w-[320px] md:min-w-[450px] snap-center py-4 flex">
              <SectionWrapper delay={index * 0.1} className="h-full w-full">
                <div className="group relative bg-[#0A0D14] border border-white/5 p-10 rounded-2xl hover:border-[#E7E8BF]/30 transition-all duration-500 h-full flex flex-col shadow-2xl shadow-black/50">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#E7E8BF]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-10 border border-white/10 group-hover:border-[#E7E8BF]/50 transition-colors duration-500">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>

                    {/* Content */}
                    <p className="text-gray-300 text-lg font-light leading-relaxed mb-12 flex-grow">
                      "{testimonial.review}"
                    </p>

                    {/* Author */}
                    <div className="mt-auto">
                      <h4 className="text-2xl font-bold text-white mb-1 tracking-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#E7E8BF]/60 text-sm font-medium tracking-widest uppercase">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          ))}
      </div>
    </section>
  );
}
