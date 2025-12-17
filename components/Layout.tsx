import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Tratamentos', path: '/tratamentos' },
    { name: 'Tecnologias', path: '/tecnologias' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled ? 'bg-white/30 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            
            {/* Desktop Nav Left */}
            <nav className="hidden md:flex items-center gap-8 flex-1">
              {navItems.slice(0, 2).map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:text-primary ${
                      isActive ? 'text-primary scale-105' : 'text-secondary/80'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Logo Center */}
            <div className="flex-shrink-0 mx-auto text-center z-10">
               <NavLink to="/" className="group flex flex-col items-center">
                 <span className={`font-serif text-3xl md:text-4xl transition-colors duration-500 ${scrolled ? 'text-secondary' : 'text-secondary'}`}>
                   Lumina
                 </span>
                 <span className="text-[0.65rem] uppercase tracking-[0.3em] text-primary group-hover:tracking-[0.4em] transition-all duration-500">
                   Estética Avançada
                 </span>
               </NavLink>
            </div>

            {/* Desktop Nav Right */}
            <nav className="hidden md:flex items-center justify-end gap-8 flex-1">
               {navItems.slice(2).map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:text-primary ${
                      isActive ? 'text-primary scale-105' : 'text-secondary/80'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/5 border border-secondary/10 hover:bg-primary hover:text-white hover:border-primary text-secondary px-6 py-2 rounded-full font-medium text-xs uppercase tracking-wider transition-all duration-500 ease-out"
              >
                Agendar
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button className="md:hidden text-secondary" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-rose/95 backdrop-blur-lg z-40 transition-transform duration-700 ease-in-out flex flex-col justify-center items-center gap-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="text-3xl font-serif text-secondary hover:text-primary hover:scale-110 transition-all duration-300"
          >
            {item.name}
          </NavLink>
        ))}
        <a
           href={COMPANY_INFO.whatsappLink}
           className="mt-4 bg-primary text-white px-10 py-4 rounded-full text-lg font-serif"
        >
           Agendar Agora
        </a>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary text-rose/60 pt-24 pb-12 rounded-t-[3rem] mt-12 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
        <div className="space-y-6">
          <h3 className="text-3xl font-serif text-rose-dark">Lumina</h3>
          <p className="font-light text-sm leading-7">
            Um refúgio de beleza e ciência. <br/>
            Cuidamos de você com a delicadeza que sua pele merece e a tecnologia que seus resultados exigem.
          </p>
        </div>

        <div>
          <h4 className="text-white font-serif italic text-lg mb-6">Explorar</h4>
          <ul className="space-y-4 text-sm font-light tracking-wide">
            <li><NavLink to="/sobre" className="hover:text-primary transition-colors hover:pl-2 duration-300 block">Nossa Essência</NavLink></li>
            <li><NavLink to="/tratamentos" className="hover:text-primary transition-colors hover:pl-2 duration-300 block">Menu de Tratamentos</NavLink></li>
            <li><NavLink to="/tecnologias" className="hover:text-primary transition-colors hover:pl-2 duration-300 block">Tecnologias</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif italic text-lg mb-6">Visite-nos</h4>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex gap-4 items-start group">
              <MapPin size={16} className="text-primary mt-1 group-hover:animate-bounce" />
              <span className="group-hover:text-white transition-colors">{COMPANY_INFO.address}</span>
            </li>
            <li className="flex gap-4 items-center group">
              <Phone size={16} className="text-primary group-hover:animate-pulse" />
              <span className="group-hover:text-white transition-colors">{COMPANY_INFO.phone}</span>
            </li>
            <li className="flex gap-4 items-center">
              <Clock size={16} className="text-primary" />
              <span>{COMPANY_INFO.hours}</span>
            </li>
          </ul>
        </div>

        <div>
           <h4 className="text-white font-serif italic text-lg mb-6">Agendamento</h4>
           <p className="mb-6 font-light text-sm">Sua jornada de autocuidado começa com uma conversa.</p>
           <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-secondary font-medium bg-rose hover:bg-white transition-colors px-8 py-3 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              Iniciar Conversa <ArrowRight size={14} />
            </a>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light tracking-wider">
        <p>&copy; {new Date().getFullYear()} Lumina Estética Avançada.</p>
        <div className="flex gap-8">
          <span className="hover:text-white cursor-pointer transition-colors">Privacidade</span>
          <span className="hover:text-white cursor-pointer transition-colors">Termos</span>
        </div>
      </div>
    </footer>
  );
};

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-rose selection:bg-rose-dark selection:text-white overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-dark/10 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button - Elegant Version */}
      <a
        href={COMPANY_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-gradient-to-tr from-green-400 to-green-600 text-white p-4 rounded-full shadow-[0_10px_30px_rgba(74,222,128,0.4)] z-50 transition-all duration-500 hover:scale-110 hover:shadow-[0_20px_40px_rgba(74,222,128,0.6)] animate-bounce-slow"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>
    </div>
  );
};

export default Layout;