import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import { SkeletonCard } from '../SkeletonLoader';

const testimonials = [
  {
    name: 'Banura Sathurusinghe',
    review:
      'Working with this team transformed our sound completely. The attention to detail and creative direction was exceptional.',
  },
  {
    name: 'Miran Archana',
    review:
      'Professional, creative, and incredibly talented. They brought our vision to life beyond our expectations.',
  },
  {
    name: 'Manula Nipun',
    review:
      'The mixing and mastering quality is world-class. Every track sounds pristine and radio-ready.',
  },
  {
    name: 'Kushan FDO',
    review:
      'Their film scoring work added so much depth and emotion to our project. Truly remarkable artists.',
  },
  {
    name: 'Miuru FDO',
    review:
      'From start to finish, the production process was smooth and the results were absolutely stunning.',
  },
  {
    name: 'Mahiru Senarathne',
    review:
      'An incredible team that understands music at its core. They deliver excellence every single time.',
  },
];

export default function Testimonials() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              What Our <span className="text-[#E7E8BF]">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Testimonials from artists and creators we've had the pleasure of working with
            </p>
          </div>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <SectionWrapper key={i} delay={i * 0.1}>
                  <SkeletonCard />
                </SectionWrapper>
              ))
            : testimonials.map((testimonial, index) => (
                <SectionWrapper key={testimonial.name} delay={index * 0.1}>
                  <div className="group relative bg-zinc-950 border border-gray-800 p-8 hover:border-[#E7E8BF] transition-all duration-500 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E7E8BF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <Quote
                        className="w-10 h-10 text-[#E7E8BF] mb-6 opacity-50"
                        strokeWidth={1.5}
                      />
                      <p className="text-gray-300 font-light leading-relaxed mb-6 italic">
                        "{testimonial.review}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-0.5 bg-[#E7E8BF] mr-4" />
                        <p className="text-white font-semibold">{testimonial.name}</p>
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
