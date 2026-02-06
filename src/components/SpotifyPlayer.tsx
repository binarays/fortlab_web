import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Music } from 'lucide-react';

const SpotifyPlayer = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 50) {
                setIsScrolled(true);
                setIsExpanded(false);
            } else {
                setIsScrolled(false);
                setIsExpanded(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed bottom-6 left-6 z-[60] pointer-events-none">
            <motion.div
                initial={false}
                animate={{
                    width: isExpanded ? '352px' : '48px',
                    height: isExpanded ? '352px' : '48px',
                }}
                className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col relative"
            >
                {/* Toggle Button - Only visible when collapsed or on hover when expanded */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`absolute ${isExpanded ? 'top-2 right-2' : 'inset-0'} z-10 flex items-center justify-center transition-all duration-300 hover:bg-white/10 text-white group`}
                    title={isExpanded ? "Collapse" : "Expand Spotify Player"}
                >
                    {isExpanded ? (
                        <ChevronDown size={20} className="text-white/60 group-hover:text-white" />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full">
                            <Music size={20} className={`text-[#E7E8BF] ${!isExpanded ? 'animate-pulse' : ''}`} />
                        </div>
                    )}
                </button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full"
                        >
                            <iframe
                                data-testid="embed-iframe"
                                style={{ borderRadius: '12px' }}
                                src="https://open.spotify.com/embed/artist/1i8ILH8vNKBYea8jzcojpm?utm_source=generator&theme=0&autoplay=1"
                                width="100%"
                                height="352"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Hint for mobile or first time users */}
            {(!isExpanded && !isScrolled) && (
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute left-16 top-1/2 -translate-y-1/2 bg-[#E7E8BF] text-black px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                >
                    LISTEN ON SPOTIFY
                </motion.div>
            )}
        </div>
    );
};

export default SpotifyPlayer;
