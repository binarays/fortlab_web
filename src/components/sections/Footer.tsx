import { Music2, Facebook, Instagram, Music } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Music2 className="w-8 h-8 text-[#E7E8BF]" strokeWidth={1.5} />
            <span className="text-2xl font-bold text-white">SoundCraft</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E7E8BF] transition-colors duration-300"
              aria-label="Spotify"
            >
              <Music className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E7E8BF] transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E7E8BF] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>

          <div className="text-gray-400 text-sm font-light">
            © {currentYear} SoundCraft. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
