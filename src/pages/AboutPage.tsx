import SectionWrapper from '../components/SectionWrapper';
import prabashanaImg from '../assets/team/Prabashana.jpeg';
import galleryImg from '../assets/gallery/fortlab.jpeg';

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 bg-black min-h-screen overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <SectionWrapper>
                    <div className="text-left mb-24">
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                            Story of <span className="text-[#E7E8BF]">Fort Lab</span>
                        </h1>
                    </div>
                </SectionWrapper>

                {/* Row 1: Image Left, Text Right */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
                    <SectionWrapper>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#E7E8BF] opacity-5 rounded-3xl blur-3xl group-hover:opacity-10 transition-opacity duration-700" />
                            <img
                                src={prabashanaImg}
                                alt="Prabhashana - Founder of Fort Lab"
                                className="relative rounded-3xl shadow-2xl w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-white/5"
                            />
                        </div>
                    </SectionWrapper>

                    <SectionWrapper>
                        <div className="flex flex-col space-y-8 text-left">
                            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                                Fort Lab was founded by Prabhashana, whose journey into music began in 2020 inside a small basement studio. With almost no resources, he spent three dedicated years learning, producing, and refining his craft building the foundation for what would later become Fort Lab.
                            </p>
                            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                                Through firsthand experience in the music industry, Prabhashana identified a critical gap: emerging artists needed more than just a recording studio. They needed guidance, strategic direction, platform awareness, and support throughout the entire creative journey from idea to release. Fort Lab was built to fill this gap.
                            </p>
                        </div>
                    </SectionWrapper>
                </div>

                {/* Row 2: Text Left, Image Right */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
                    <SectionWrapper className="order-2 lg:order-1">
                        <div className="flex flex-col space-y-8 text-left">
                            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                                Today, Fort Lab works closely with upcoming and emerging artists, offering industry-standard music production, mentorship, and a complete end-to-end creative experience. We focus not only on sound, but on helping artists understand the industry, develop their identity, and grow with confidence.
                            </p>
                            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                                Fort Lab now collaborates with Sri Lanka’s leading record labels, content creation companies, music composers, instrumentalists, filmmakers, young artists, and marketing agencies, building strong creative partnerships across the industry.
                            </p>
                            <div className="pt-6">
                                <p className="text-[#E7E8BF] font-bold text-3xl tracking-tight uppercase">
                                    Growth with confidence.
                                </p>
                            </div>
                        </div>
                    </SectionWrapper>

                    <SectionWrapper className="order-1 lg:order-2">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#E7E8BF] opacity-5 rounded-3xl blur-3xl group-hover:opacity-10 transition-opacity duration-700" />
                            <img
                                src={galleryImg}
                                alt="Fort Lab Gallery"
                                className="relative rounded-3xl shadow-2xl w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-[1.02] border border-white/5"
                            />
                        </div>
                    </SectionWrapper>
                </div>
            </div>
        </div>
    );
}
