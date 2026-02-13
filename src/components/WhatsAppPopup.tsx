import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const FlutePlayer = () => (
    <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 text-[#E7E8BF]"
        animate={{
            rotate: [0, -5, 0, 5, 0],
            y: [0, -2, 0, -2, 0],
        }}
        transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        {/* Flute */}
        <motion.path
            d="M6 18L18 6"
            animate={{ x: [0, 1, 0], y: [0, -1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx="8" cy="16" r="1" fill="currentColor" />
        <circle cx="10" cy="14" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="14" cy="10" r="1" fill="currentColor" />
        <circle cx="16" cy="8" r="1" fill="currentColor" />

        {/* Player silhouette simplified */}
        <path d="M12 22s-2-1-2-4 1-4 2-4 2 1 2 4-1 4-2 4z" fill="currentColor" fillOpacity="0.2" />
        <circle cx="12" cy="11" r="2" fill="currentColor" fillOpacity="0.2" />
    </motion.svg>
);

const WhatsAppPopup = () => {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

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
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    if (isMobile || location.pathname === '/about') return null;

    const whatsappUrl = "https://wa.me/94704813885";

    return (
        <div className="fixed bottom-6 right-6 z-[55] pointer-events-none">
            <motion.div
                initial={false}
                animate={{
                    width: isExpanded ? '280px' : '48px',
                    height: isExpanded ? '320px' : '48px',
                }}
                className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col relative"
            >
                {/* Toggle/Close Button */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`absolute ${isExpanded ? 'top-2 right-2' : 'inset-0'} z-10 flex items-center justify-center transition-all duration-300 hover:bg-white/10 text-white group`}
                    title={isExpanded ? "Minimize" : "Chat with us"}
                >
                    {isExpanded ? (
                        <X size={16} className="text-white/60 group-hover:text-white" />
                    ) : (
                        <MessageCircle size={20} className="text-[#E7E8BF]" />
                    )}
                </button>

                <AnimatePresence>
                    {isExpanded ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="p-6 flex flex-col items-center h-full"
                        >
                            <div className="flex flex-col items-center gap-2 text-center mt-2 mb-4">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#E7E8BF]/10 blur-2xl rounded-full" />
                                    <FlutePlayer />
                                </div>
                                <div>
                                    <h4 className="text-white text-base font-bold tracking-tight leading-none">Fort Lab Studios</h4>
                                    <p className="text-[#E7E8BF]/60 text-[10px] mt-1 italic font-light lowercase tracking-widest">capturing your sonic essence</p>
                                </div>
                            </div>

                            {/* Chat Animation Area */}
                            <div className="flex-1 w-full flex flex-col gap-3 overflow-hidden px-1">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    className="self-end bg-white/10 text-white text-[11px] py-2 px-3 rounded-2xl rounded-tr-none border border-white/5"
                                >
                                    Hey!
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.2, duration: 0.5 }}
                                    className="self-start bg-[#E7E8BF] text-black text-[11px] py-2.5 px-3 rounded-2xl rounded-tl-none font-medium shadow-lg shadow-[#E7E8BF]/10 leading-relaxed"
                                >
                                    Welcome to Fort Lab! <br />How can we help you?
                                </motion.div>
                            </div>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-[#E7E8BF] hover:bg-white text-black py-3 px-6 rounded-2xl text-sm font-bold transition-all duration-300 transform active:scale-95 shadow-lg shadow-[#E7E8BF]/10 mt-4"
                            >
                                <MessageCircle size={18} />
                                Start Chat
                            </a>
                        </motion.div>
                    ) : (
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="w-full h-full flex items-center justify-center bg-transparent"
                        >
                            {/* Empty space for the toggle button child above */}
                        </button>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Pulsing notification hint when collapsed and at top */}
            {(!isExpanded && !isScrolled) && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#E7E8BF] rounded-full border-2 border-black shadow-[0_0_10px_rgba(231,232,191,0.5)]"
                />
            )}
        </div>
    );
};

export default WhatsAppPopup;
