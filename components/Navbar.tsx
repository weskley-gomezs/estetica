import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { NavItem } from '../types';
import { openWhatsApp } from '../utils/constants';

interface NavbarProps {
  onNavigate: (href: string) => void;
}

const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Tratamentos', href: '#services' },
  { label: 'A Clínica', href: '#about' },
  { label: 'Resultados', href: '#results' },
  { label: 'Contato', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20); // Reduzi o threshold para responder mais rápido
    
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    // Inicializa
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    onNavigate(href);
  };

  // Define as variantes de animação baseadas no dispositivo
  // No mobile, evitamos mudar width/borderRadius para não causar "layout shift"
  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: isMobile 
      ? { 
          // Mobile: Apenas background e blur mudam. Largura fixa 100%.
          y: 0, 
          opacity: 1,
          top: 0,
          width: '100%',
          maxWidth: '100%',
          borderRadius: '0px',
          backgroundColor: scrolled ? 'rgba(19, 64, 64, 0.95)' : 'rgba(0, 0, 0, 0)', // Mais opaco no mobile para leitura
          borderBottomWidth: scrolled ? '1px' : '0px', // Borda apenas embaixo
          borderColor: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)', // Blur menor no mobile para performance
          boxShadow: scrolled ? '0 4px 20px -5px rgba(0, 0, 0, 0.2)' : 'none',
        }
      : { 
          // Desktop: Mantém o efeito "pill" sofisticado
          y: 0, 
          opacity: 1,
          top: scrolled ? 24 : 0,
          width: scrolled ? '90%' : '100%',
          maxWidth: scrolled ? '1100px' : '100%',
          borderRadius: scrolled ? '50px' : '0px',
          backgroundColor: scrolled ? 'rgba(19, 64, 64, 0.85)' : 'rgba(0, 0, 0, 0)',
          borderWidth: scrolled ? '1px' : '0px',
          borderColor: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
          boxShadow: scrolled ? '0 20px 50px -12px rgba(0, 0, 0, 0.5)' : 'none',
        }
  };

  return (
    <>
      <motion.nav
        initial="initial"
        animate="animate"
        variants={navVariants}
        transition={{ duration: 0.4, ease: "easeOut" }} // Transição mais rápida
        className="fixed z-50 left-0 right-0 mx-auto overflow-hidden will-change-transform" // will-change ajuda GPU
      >
        <div className={`flex items-center justify-between px-6 transition-all duration-300 ${scrolled ? 'py-3' : 'py-4 md:py-6 container mx-auto'}`}>
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('#hero')}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-serene-400 blur-md opacity-50" />
              <Sparkles className={`w-5 h-5 md:w-6 md:h-6 ${scrolled ? 'text-serene-300' : 'text-serene-100'} relative z-10`} />
            </div>
            <span className={`font-serif text-xl md:text-2xl font-semibold tracking-wide text-white`}>
              SERENE
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`relative font-sans text-sm font-medium tracking-wider transition-colors group ${
                  scrolled ? 'text-serene-100/80 hover:text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-[1px] bg-serene-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
            <motion.button
              onClick={() => openWhatsApp()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-sans text-xs uppercase tracking-widest transition-colors border ${
                scrolled 
                  ? 'bg-serene-400 text-serene-900 border-serene-400 hover:bg-serene-300' 
                  : 'bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20'
              }`}
            >
              Agendar
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-serene-900/95 backdrop-blur-xl flex flex-col items-center justify-center overscroll-none touch-none" // Impede scroll de fundo
          >
            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }} // Delay reduzido para parecer mais rápido
                  className="font-serif text-3xl text-serene-100 active:text-serene-400 transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            
            <div className="absolute bottom-10 left-0 w-full text-center px-6">
                 <p className="text-white/30 text-xs mb-4">Siga-nos nas redes sociais</p>
                 <button 
                    onClick={() => openWhatsApp()}
                    className="w-full bg-serene-400 py-4 rounded-xl text-serene-900 font-bold uppercase tracking-widest"
                 >
                    Agendar Agora
                 </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};