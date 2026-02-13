import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoWhite from '../../assets/logos/FORTLAB_LOGO_WHITE.png';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();



    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        if (href.startsWith('#')) {
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.querySelector(href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const element = document.querySelector(href);
                element?.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            if (location.pathname !== href) {
                navigate(href);
                window.scrollTo({ top: 0, behavior: 'instant' });
            } else if (href === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-full bg-black/60 backdrop-blur-md border border-white/10 py-6 shadow-xl transition-all duration-500"
        >
            <div className="px-8 flex items-center justify-between">
                <a
                    href="/"
                    onClick={(e) => handleNavClick(e, '/')}
                    className="flex items-center gap-2 group"
                >
                    <img
                        src={logoWhite}
                        alt="FORTLAB"
                        className="h-8 w-auto group-hover:scale-105 transition-transform duration-300"
                    />
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`text-sm font-medium transition-colors duration-300 uppercase tracking-widest px-2 py-1 relative group ${location.pathname === link.href ? 'text-[#E7E8BF]' : 'text-gray-300 hover:text-[#E7E8BF]'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-[#E7E8BF] transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-b border-white/5 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`text-xl font-semibold transition-colors uppercase tracking-widest ${location.pathname === link.href ? 'text-[#E7E8BF]' : 'text-white hover:text-[#E7E8BF]'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
