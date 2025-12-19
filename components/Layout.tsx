
import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Phone, MapPin, Sparkles, ArrowRight, Clock, ShieldCheck, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'A Clínica', path: '/sobre' },
    { name: 'Tratamentos', path: '/tratamentos' },
    { name: 'Tecnologias', path: '/tecnologias' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <>
      <header 
        className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled 
            ? 'top-4 mx-4 md:mx-auto max-w-5xl bg-white/75 backdrop-blur-2xl shadow-[0_20px_50px_rgba(74,64,58,0.1)] border border-white/50 py-3 px-8 rounded-full' 
            : 'top-0 bg-transparent py-10 px-8 rounded-none'
        }`}
      >
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <NavLink to="/" className="group flex flex-col items-start relative z-10 outline-none">
             <span className="font-serif text-2xl md:text-3xl tracking-tighter text-secondary leading-none">
               Lumina
             </span>
             <span className="text-[0.5rem] uppercase tracking-[0.4em] text-primary font-bold group-hover:tracking-[0.5em] transition-all duration-500">
               Estética Avançada
             </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 py-2 group ${
                    isActive ? 'text-secondary' : 'text-secondary/40 hover:text-secondary'
                  }`
                }
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-primary scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100 ${location.pathname === item.path ? 'scale-x-100' : ''}`}></span>
              </NavLink>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-3 bg-secondary text-white px-7 py-3 rounded-full font-bold text-[9px] uppercase tracking-[0.2em] transition-all duration-500 shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Agendar <Sparkles size={12} className="text-primary animate-pulse" />
            </a>

            <button 
              className="lg:hidden w-11 h-11 flex items-center justify-center text-secondary bg-white/30 backdrop-blur-lg border border-white/50 rounded-full" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-secondary/98 backdrop-blur-3xl z-[70] transition-all duration-700 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-4'
        }`}
      >
        <button 
          className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center text-white/40 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} strokeWidth={1} />
        </button>

        <div className="h-full flex flex-col justify-center items-center gap-12 text-center p-8">
          <nav className="flex flex-col gap-6">
            {navItems.map((item, i) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-4xl md:text-5xl font-serif text-white/20 hover:text-primary transition-all duration-500 hover:italic"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="w-12 h-px bg-primary/20"></div>
          
          <a
            href={COMPANY_INFO.whatsappLink}
            className="flex items-center gap-4 text-white border border-white/10 px-10 py-5 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-secondary transition-all duration-500"
          >
            WhatsApp <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary text-rose/60 pt-24 pb-8 rounded-t-[4rem] mt-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-rose-dark/5 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Coluna 1: Marca e Responsabilidade */}
          <div className="space-y-8">
            <NavLink to="/" className="flex flex-col items-start outline-none">
               <span className="font-serif text-4xl tracking-tighter text-rose-dark leading-none">
                 Lumina
               </span>
               <span className="text-[0.6rem] uppercase tracking-[0.4em] text-primary/80 font-bold">
                 Estética Avançada
               </span>
            </NavLink>
            
            <p className="font-light text-sm leading-relaxed opacity-80 max-w-xs">
              Excelência técnica e sensibilidade artística para realçar o que há de mais belo em você.
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-rose-dark/80">
                <ShieldCheck size={18} strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-widest font-bold">Responsável Técnico</span>
              </div>
              <p className="text-xs font-serif italic text-white/60">
                {COMPANY_INFO.technicalResponsible}
              </p>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 className="text-white font-serif italic text-xl mb-10 relative inline-block">
              Navegação
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-primary/50"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'A Clínica', path: '/sobre' },
                { name: 'Tratamentos', path: '/tratamentos' },
                { name: 'Tecnologias', path: '/tecnologias' },
                { name: 'Fale Conosco', path: '/contato' }
              ].map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path} 
                    className="text-[10px] uppercase tracking-[0.2em] font-bold hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Localização e Contato */}
          <div>
            <h4 className="text-white font-serif italic text-xl mb-10 relative inline-block">
              Unidade Brasília
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-primary/50"></span>
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start group cursor-default">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                  <MapPin size={14} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-light leading-relaxed">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex gap-4 items-center group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                  <Phone size={14} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-light">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex gap-4 items-center group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                  <Mail size={14} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-light lowercase">{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Agendamento e Horários */}
          <div className="space-y-10">
            <div>
              <h4 className="text-white font-serif italic text-xl mb-6 relative inline-block">
                Horários
                <span className="absolute -bottom-2 left-0 w-8 h-px bg-primary/50"></span>
              </h4>
              <div className="flex gap-3 items-start">
                <Clock size={16} className="text-primary shrink-0 mt-1" />
                <p className="text-xs font-light leading-relaxed opacity-70">
                  {COMPANY_INFO.hours.split('|').map((h, i) => (
                    <span key={i} className="block mb-1">{h.trim()}</span>
                  ))}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white text-secondary font-bold hover:bg-primary hover:text-white transition-all duration-500 px-8 py-4 rounded-full shadow-xl text-[10px] uppercase tracking-[0.2em] group"
              >
                Solicitar Avaliação 
                <Sparkles size={14} className="text-primary group-hover:text-white animate-pulse" />
              </a>
              
              <div className="flex justify-center lg:justify-start gap-4">
                <a href={`https://instagram.com/${COMPANY_INFO.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary transition-all duration-500 group">
                  <Instagram size={18} className="text-rose/60 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
            <p>&copy; {new Date().getFullYear()} LUMINA ESTÉTICA AVANÇADA</p>
            <span className="hidden md:block w-px h-3 bg-white/10"></span>
            <NavLink to="/termos" className="hover:text-white transition-colors">Termos</NavLink>
            <NavLink to="/privacidade" className="hover:text-white transition-colors">Privacidade</NavLink>
          </div>
          
          <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-white/10">
            <span>Desenvolvido por</span>
            <span className="text-primary/40 font-serif italic text-xs">Weskley Gomes</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-rose selection:bg-rose-dark selection:text-white overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* WhatsApp FAB - Estilizado */}
      <a
        href={COMPANY_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 bg-secondary text-white p-5 rounded-full shadow-2xl z-40 transition-all duration-500 hover:scale-110 hover:bg-primary group overflow-hidden border border-white/10"
      >
        <Phone size={22} className="relative z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-rose-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <span className="absolute top-2 right-2 w-3 h-3 bg-rose-dark rounded-full border-2 border-secondary animate-ping"></span>
      </a>
    </div>
  );
};

export default Layout;
