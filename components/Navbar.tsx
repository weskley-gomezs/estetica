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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
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
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed z-50 left-0 right-0 mx-auto overflow-hidden"
      >
        <div className={`flex items-center justify-between px-6 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6 container mx-auto'}`}>
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => handleNavClick('#hero')}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-serene-400 blur-md opacity-50" />
              <Sparkles className={`w-6 h-6 ${scrolled ? 'text-serene-300' : 'text-serene-100'} relative z-10`} />
            </motion.div>
            <span className={`font-serif text-2xl font-semibold tracking-wide text-white`}>
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
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-serene-900 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="font-serif text-4xl text-serene-100 hover:text-serene-400"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};