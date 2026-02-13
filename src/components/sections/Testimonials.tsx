import { useRef, useState, useEffect } from 'react';
import SectionWrapper from '../SectionWrapper';
import { SkeletonCard } from '../SkeletonLoader';

import banuraImg from '../../assets/feedbacks/banura.jpeg';
import lakshanImg from '../../assets/feedbacks/lakshan_daluwatta.jpeg';
import dinethImg from '../../assets/feedbacks/dineth_fernando.jpeg';
import kavishkaImg from '../../assets/feedbacks/kavishka_warnakula.jpeg';

const testimonials = [
  {
    name: 'Banura Sathurusinghe',
    role: 'Artist',
    review:
      "Thank you so much for your incredible production and mix mastering on “Heena Paarana” and “Unmadini,” Prabhashana. You truly brought them to life with a polished, professional sound, perfectly capturing the emotion and vision. I deeply appreciate your dedication and care.",
    avatar: banuraImg,
  },
  {
    name: 'Lakshan Daluwatta',
    role: 'Artist',
    review:
      'Working with Fort Lab Studios has been incredible. Supun Prabhashana composed Kawadada Ithin and Thol Pethi (Acoustic Reprise), delivering beyond expectations. He’s talented, chill, intuitive, and knows how to make tracks hit. I recommend him.',
    avatar: lakshanImg,
  },
  {
    name: 'Dineth Fernando',
    role: 'Animation Artist',
    review:
      'I had a 10/10 experience at Fortlab Studios for my college project. Prabashana was kind, welcoming, attentive, and incredibly talented, delivering top-quality music in a comfortable, professional studio. I highly recommend them for music production needs.',
    avatar: dinethImg,
  },
  {
    name: 'Kavishka Warnakula',
    role: 'Filmmaker based in UK',
    review:
      'Collaborating with Supun on my short film Heard in Silence was truly rewarding. His score brought emotional depth, capturing its tone and atmosphere. He approaches storytelling with sensitivity and professionalism, and I anticipate projects together.',
    avatar: kavishkaImg,
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
      const canScrollRight = scrollLeft < scrollWidth - clientWidth - 1;

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
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
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
                <div className="w-full bg-[#0A0D14] p-10 rounded-2xl border border-white/5">
                  <SkeletonCard />
                </div>
              </SectionWrapper>
            </div>
          ))
          : testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="min-w-[320px] md:min-w-[500px] snap-center py-4 flex">
              <SectionWrapper delay={index * 0.1} className="h-full w-full">
                <div className="group relative bg-[#0A0D14] border border-white/5 p-10 rounded-2xl hover:border-[#E7E8BF]/30 transition-all duration-500 h-full flex flex-col shadow-2xl shadow-black/50 w-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#E7E8BF]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-8 border border-white/10 group-hover:border-[#E7E8BF]/50 transition-colors duration-500">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>

                    {/* Content */}
                    <p className="text-gray-300 text-lg font-light leading-relaxed mb-6">
                      "{testimonial.review}"
                    </p>

                    {/* Author */}
                    <div className="mt-0">
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
