import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';
import fortlab01 from '../../assets/gallery/fortlab01.webp';
import fortlab02 from '../../assets/gallery/fortlab02.webp';
import fortlab03 from '../../assets/gallery/fortlab03.webp';
import fortlab04 from '../../assets/gallery/fortlab04.webp';
import fortlab05 from '../../assets/gallery/fortlab05.webp';
import fortlab06 from '../../assets/gallery/fortlab06.webp';

const galleryImages = [
    { id: 1, src: fortlab01, alt: 'Fort Lab Gallery 1' },
    { id: 2, src: fortlab02, alt: 'Fort Lab Gallery 2' },
    { id: 3, src: fortlab03, alt: 'Fort Lab Gallery 3' },
    { id: 4, src: fortlab04, alt: 'Fort Lab Gallery 4' },
    { id: 5, src: fortlab05, alt: 'Fort Lab Gallery 5' },
    { id: 6, src: fortlab06, alt: 'Fort Lab Gallery 6' },
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-20 bg-black overflow-hidden">
            <div className="container mx-auto px-4 md:px-0">
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
                            Our <span className="text-[#E7E8BF]">Gallery</span>
                        </h2>
                    </div>
                </SectionWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <SectionWrapper key={image.id} delay={index * 0.1}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 group bg-white/5 backdrop-blur-sm"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </motion.div>
                        </SectionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
