import { Facebook, Instagram } from 'lucide-react';
import logoWhite from '../../assets/logos/FORTLAB_LOGO_WHITE.png';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const SpotifyIcon = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.508 17.302c-.216.354-.674.464-1.028.248-2.822-1.724-6.375-2.112-10.558-1.157-.403.091-.809-.163-.901-.566-.092-.403.163-.809.566-.901 4.58-1.047 8.52-.6 11.674 1.328.354.216.464.674.247 1.028zm1.472-3.26c-.272.443-.852.583-1.295.311-3.23-1.985-8.157-2.56-11.977-1.4c-.5.148-1.02-.142-1.17-.643-.149-.5.142-1.02.643-1.17 4.373-1.328 9.805-.668 13.514 1.613.443.272.583.852.311 1.295zm.126-3.414c-3.873-2.3-10.272-2.512-13.98-1.385-.595.181-1.22-.162-1.4-.757-.181-.595.162-1.22.757-1.4 4.269-1.295 11.336-1.037 15.795 1.608.535.318.71 1.01.393 1.545s-1.01.71-1.545.393z" />
    </svg>
  );

  const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.476L0 24l6.335-1.662c1.42.775 3.022 1.185 4.653 1.186h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <a href="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center gap-3 group">
              <img src={logoWhite} alt="FORT LAB" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
            </a>
            <p className="text-gray-400 font-light leading-relaxed max-w-sm">
              A dedicated team of music producers and creative artists focused on transforming ideas into compelling sonic experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="flex flex-col gap-4">
                {['Home', 'About', 'Services'].map((item) => (
                  <li key={item}>
                    <a
                      href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                      onClick={(e) => handleNavClick(e, item === 'Home' ? '/' : `#${item.toLowerCase()}`)}
                      className="text-gray-400 hover:text-[#E7E8BF] transition-colors duration-300 text-sm font-medium"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-11">
              <ul className="flex flex-col gap-4">
                {['Projects', 'Team', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
                      className="text-gray-400 hover:text-[#E7E8BF] transition-colors duration-300 text-sm font-medium"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Socials & Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Connect With Us</h4>
            <div className="flex items-center gap-4">
              {[
                { icon: SpotifyIcon, label: 'Spotify', href: 'https://open.spotify.com/artist/1i8ILH8vNKBYea8jzcojpm?si=hTfZPV1aTuqCvjliEk-iLA' },
                { icon: WhatsAppIcon, label: 'WhatsApp', href: 'https://wa.me/94704813885' },
                { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/61563647684875' },
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/fortlab_studios' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-black hover:bg-[#E7E8BF] hover:border-[#E7E8BF] transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span className="text-gray-500 text-xs font-light tracking-widest uppercase">
              © {currentYear} FORT LAB. All rights reserved.
            </span>
            <span className="hidden md:block w-px h-3 bg-white/10"></span>
            <span className="text-gray-500 text-xs font-light tracking-widest uppercase">
              Designed & Developed by <span className="text-[#E7E8BF] font-medium">Binara Wijewickrama</span>
            </span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
