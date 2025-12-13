import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, ArrowUp, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../utils/constants';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-satin-50 border-t border-serene-100 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle Animated Gradient Background */}
      <motion.div 
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-30 bg-gradient-to-r from-serene-50 via-white to-serene-100 bg-[length:200%_200%]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl text-serene-900 mb-2">Serene Aesthetics</h2>
            <p className="text-satin-800/50 text-sm">Elevando sua beleza natural ao estado de arte.</p>
          </div>

          <div className="flex gap-6">
            <SocialIcon icon={Instagram} />
            <SocialIcon icon={Facebook} />
            <SocialIcon icon={Twitter} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-serene-200 pt-8 text-xs text-satin-800/50">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© 2025 Serene Aesthetics. Todos os direitos reservados.</p>
            <p className="hidden md:block">|</p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%20Weskley%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site%20similar.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-serene-600 transition-colors cursor-pointer"
            >
              Desenvolvido por <span className="font-bold">Weskley Gomes</span>
              <MessageCircle size={12} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 mt-4 md:mt-0 hover:text-serene-600 transition-colors"
          >
            Voltar ao topo
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowUp size={14} />
            </motion.div>
          </button>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: any }> = ({ icon: Icon }) => (
  <motion.a 
    href="#"
    whileHover={{ y: -3, color: '#2A9D9D' }}
    className="text-satin-800/40 transition-colors"
  >
    <Icon size={24} />
  </motion.a>
);