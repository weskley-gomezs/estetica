import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Star, Sparkles, Feather, Heart, GripVertical } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { TREATMENTS, TESTIMONIALS, COMPANY_INFO, BEFORE_AFTER_ITEMS } from '../constants';

const ImageComparison = ({ before, after, alt }: { before: string; after: string; alt: string }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const pos = ((x - rect.left) / rect.width) * 100;
    
    setPosition(Math.min(Math.max(pos, 0), 100));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] rounded-[2rem] overflow-hidden cursor-col-resize shadow-lg group select-none"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* Camada Inferior: DEPOIS (Visível na parte DIREITA) */}
      <img src={after} alt={`Depois ${alt}`} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <span className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full z-10">DEPOIS</span>

      {/* Camada Superior: ANTES (Visível na parte ESQUERDA - recortada da direita) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={before} alt={`Antes ${alt}`} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full z-10">ANTES</span>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-primary">
          <GripVertical size={16} />
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Surreal & Ethereal */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Abstract/Image Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
           <img 
             src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
             className="w-full h-full object-cover opacity-90 scale-105 animate-breathe"
             alt="Ambiente etéreo"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-rose/80 via-white/20 to-rose"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
            <span className="inline-block py-1 px-4 rounded-full border border-secondary/20 bg-white/30 backdrop-blur-sm text-xs font-bold uppercase tracking-[0.2em] text-secondary/80">
              Estética Sensorial
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-secondary leading-tight">
              A arte de <br/> <span className="italic font-light text-secondary/80">sentir-se única</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-secondary/70 max-w-2xl mx-auto leading-relaxed">
              Um espaço onde a ciência encontra a delicadeza. Protocolos desenhados para realçar sua beleza natural em uma atmosfera de puro acolhimento.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <a 
                href={COMPANY_INFO.whatsappLink}
                className="group relative px-10 py-4 bg-gradient-to-r from-primary to-rose-dark text-white rounded-full font-medium tracking-wide overflow-hidden shadow-[0_10px_20px_rgba(176,137,104,0.3)] hover:shadow-[0_15px_30px_rgba(176,137,104,0.5)] transition-all duration-500 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">Agendar Experiência <Sparkles size={16} /></span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </a>
              <NavLink 
                to="/tratamentos"
                className="px-10 py-4 bg-white/40 backdrop-blur-md border border-white/50 text-secondary rounded-full font-medium tracking-wide hover:bg-white/60 transition-all duration-500 hover:-translate-y-1"
              >
                Explorar Menu
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy - Floating Cards */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: Feather, title: "Toque Delicado", desc: "Procedimentos minimamente invasivos com foco no conforto absoluto." },
               { icon: Star, title: "Tecnologia de Ponta", desc: "Equipamentos Gold Standard mundial para resultados visíveis e seguros." },
               { icon: Heart, title: "Olhar Humano", desc: "Não tratamos rugas, cuidamos da sua autoestima e confiança." }
             ].map((item, i) => (
               <div key={i} className="glass-panel p-10 rounded-[2rem] hover:-translate-y-3 transition-transform duration-700 group cursor-default">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                   <item.icon className="text-primary opacity-80" strokeWidth={1.5} size={28} />
                 </div>
                 <h3 className="text-2xl font-serif text-secondary mb-4">{item.title}</h3>
                 <p className="text-secondary/60 font-light leading-relaxed">
                   {item.desc}
                 </p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Featured Treatments - Horizontal Flow */}
      <section className="py-20 bg-gradient-to-b from-transparent to-white/40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-4">Nossos Serviços</h2>
              <p className="text-secondary/60 font-light text-lg">Tratamentos que unem alta performance e bem-estar.</p>
            </div>
            <NavLink to="/tratamentos" className="text-primary hover:text-rose-dark transition-colors border-b border-primary/30 pb-1 flex items-center gap-2">
              Ver Menu Completo <ArrowRight size={16} />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TREATMENTS.slice(0, 3).map((treatment) => (
              <div key={treatment.id} className="group relative cursor-pointer">
                <div className="h-[450px] rounded-[2.5rem] overflow-hidden relative shadow-lg">
                   <img 
                    src={treatment.image} 
                    alt={treatment.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                   
                   <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-white/80 text-xs uppercase tracking-widest mb-2 block">Face & Corpo</span>
                      <h3 className="text-2xl font-serif text-white mb-2">{treatment.title}</h3>
                      <p className="text-white/70 font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 line-clamp-2">
                        {treatment.shortDescription}
                      </p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sensory Break / Image + Text */}
      <section className="py-32">
        <div className="container mx-auto px-6">
           <div className="glass-panel rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
                 <div className="md:w-1/2 space-y-8">
                    <h2 className="text-4xl md:text-6xl font-serif text-secondary leading-tight">
                      Você merece um momento <br/> <span className="italic text-primary">só seu.</span>
                    </h2>
                    <p className="text-lg text-secondary/70 font-light leading-relaxed">
                      Em um mundo acelerado, parar para se cuidar é um ato de resistência e amor próprio. 
                      Na Lumina, cada detalhe — do aroma do ambiente à temperatura da sala — é pensado para que você relaxe enquanto cuidamos da sua beleza.
                    </p>
                    <NavLink to="/sobre" className="inline-block border border-secondary/20 rounded-full px-8 py-3 text-sm uppercase tracking-widest hover:bg-secondary hover:text-white transition-all duration-500">
                      Nossa Filosofia
                    </NavLink>
                 </div>
                 <div className="md:w-1/2 relative">
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                      <img 
                        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" 
                        alt="Mulher relaxada" 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                 </div>
              </div>
              
              {/* Background blobs */}
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[80px]"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-dark/10 rounded-full blur-[80px]"></div>
           </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-24 bg-gradient-to-b from-white/40 to-transparent">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Transformações Reais</span>
              <h2 className="text-4xl md:text-5xl font-serif text-secondary">Resultados que Inspiram</h2>
              <p className="text-secondary/60 font-light mt-4">Deslize para ver a transformação.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {BEFORE_AFTER_ITEMS.map((item) => (
                <div key={item.id} className="space-y-4">
                  <ImageComparison 
                    before={item.beforeImage} 
                    after={item.afterImage} 
                    alt={item.treatment} 
                  />
                  <div className="flex justify-between items-end px-2">
                    <div>
                       <h3 className="text-xl font-serif text-secondary">{item.treatment}</h3>
                       <p className="text-sm text-secondary/60 font-light">{item.description}</p>
                    </div>
                    <div className="text-xs text-primary font-bold uppercase tracking-widest">
                       Lumina
                    </div>
                  </div>
                </div>
              ))}
           </div>
           <div className="mt-12 text-center">
              <p className="text-xs text-secondary/40 italic">*Resultados individuais podem variar. Fotos autorizadas pelos pacientes.</p>
           </div>
        </div>
      </section>

      {/* Testimonials - Auto-rotating Carousel */}
      <section className="py-24 bg-white/40">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Star size={32} className="text-primary mx-auto mb-8 animate-pulse" fill="currentColor" />
          
          <div className="min-h-[200px] flex flex-col justify-center transition-all duration-500">
            <h2 className="text-3xl md:text-5xl font-serif text-secondary mb-8 italic leading-tight animate-fade-in">
              "{TESTIMONIALS[activeTestimonial].text}"
            </h2>
            <div className="flex flex-col items-center gap-2 animate-fade-in">
              <span className="font-bold text-secondary uppercase tracking-widest text-sm">{TESTIMONIALS[activeTestimonial].name}</span>
              <span className="text-xs text-secondary/50 font-serif italic">{TESTIMONIALS[activeTestimonial].treatment}</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-3 mt-12">
            {TESTIMONIALS.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveTestimonial(i)}
                className={`rounded-full transition-all duration-500 ease-out ${i === activeTestimonial ? 'bg-secondary w-8 h-2' : 'bg-secondary/20 w-2 h-2 hover:bg-secondary/40'}`}
                aria-label={`Ver depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;