import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Button } from './ui/Button';
import { openWhatsApp } from '../utils/constants';

// Typewriter Component
const TypewriterText = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout);
  }, []);

  // Typing logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150 + Math.random() * 50);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="inline-block min-w-[200px] text-serene-300 font-serif italic">
      {words[index].substring(0, subIndex)}
      <span className={`${blink ? 'opacity-100' : 'opacity-0'} text-serene-400 ml-1 not-italic`}>|</span>
    </span>
  );
};

export const Hero: React.FC = () => {
  const [imageSrc, setImageSrc] = useState('/images/unnamed.jpg');
  const [attempt, setAttempt] = useState(0);

  // Lógica inteligente para "caçar" o arquivo correto caso o nome exato falhe
  const handleImageError = () => {
    const fallbacks = [
      '/images/unnamed.jpeg',      // Tenta extensão .jpeg
      '/images/unnamed.png',       // Tenta extensão .png
      '/images/unnamed.jpg.jpg',   // Tenta erro comum do Windows (extensão dupla)
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop' // Último recurso: Unsplash
    ];

    if (attempt < fallbacks.length) {
      console.log(`Tentando variante de imagem: ${fallbacks[attempt]}`);
      setImageSrc(fallbacks[attempt]);
      setAttempt(prev => prev + 1);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-serene-900 via-serene-800 to-serene-950 pt-32 pb-20">
      
      {/* Background Tech/Organic Mesh */}
      <div className="absolute inset-0 -z-10 opacity-30">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
           className="absolute -top-[50%] -right-[50%] w-[100vw] h-[100vw] rounded-[40%] bg-gradient-to-b from-serene-600/20 to-transparent blur-[120px]"
         />
         <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
           className="absolute -bottom-[30%] -left-[20%] w-[80vw] h-[80vw] rounded-[45%] bg-gradient-to-t from-serene-500/10 to-transparent blur-[100px]"
         />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="lg:col-span-6 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="relative inline-block mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-serene-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-serene-400"></span>
                </span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">
                  Clínica de Estética Integrativa
                </span>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              className="font-serif text-5xl md:text-7xl lg:text-7xl text-white leading-[1.1] mb-8"
            >
              Revele sua verdadeira <br/>
              <TypewriterText words={['essência.', 'beleza.', 'confiança.', 'luminosidade.']} />
            </motion.h1>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="font-sans text-serene-100/80 text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-light"
            >
              Onde a alta tecnologia encontra a natureza. Protocolos exclusivos desenhados para realçar sua beleza com precisão, conforto e sofisticação.
            </motion.p>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                onClick={() => openWhatsApp()}
                className="pl-8 pr-6 bg-serene-400 hover:bg-serene-300 text-serene-900 border-none"
              >
                Agendar Avaliação
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </Button>
              <Button 
                 onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                 variant="outline" 
                 className="text-white border-white/30 hover:bg-white/10 hover:border-white"
              >
                Conheça nossos Serviços
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="mt-12 flex items-center gap-6 text-white/60 text-sm"
            >
               <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-serene-900 bg-serene-800 flex items-center justify-center overflow-hidden">
                     <img src={`https://picsum.photos/seed/${i + 50}/100/100`} alt="Avatar" className="w-full h-full object-cover" />
                   </div>
                 ))}
               </div>
               <div className="flex flex-col">
                 <div className="flex gap-1 text-serene-400">
                   <Star size={14} fill="currentColor" />
                   <Star size={14} fill="currentColor" />
                   <Star size={14} fill="currentColor" />
                   <Star size={14} fill="currentColor" />
                   <Star size={14} fill="currentColor" />
                 </div>
                 <span>+5000 clientes satisfeitas</span>
               </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Image / Visual - Woman + Dark Gradient Blend */}
        <div className="lg:col-span-6 relative h-[500px] lg:h-[700px] mt-12 lg:mt-0">
          {/* Main Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Abstract Background behind image */}
            <div className="absolute w-[500px] h-[500px] bg-serene-400/20 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            
            {/* The Image Container */}
            <div className="relative w-[90%] h-full rounded-[100px] rounded-tr-[200px] overflow-hidden border border-white/10 shadow-2xl shadow-serene-900/50">
               
               {/* Imagem com lógica de tentativa de recuperação */}
               <img 
                 src={imageSrc} 
                 alt="Especialista Serene" 
                 className="w-full h-full object-cover"
                 onError={handleImageError}
               />

               {/* Gradient Overlay for integration */}
               <div className="absolute inset-0 bg-gradient-to-t from-serene-900 via-transparent to-transparent opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-r from-serene-900/50 via-transparent to-transparent" />
            
               {/* Floating Tech Element */}
               <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-xl p-5 rounded-2xl border border-white/20 w-64"
               >
                 <div className="flex justify-between items-start mb-2">
                   <div className="text-white">
                     <p className="text-xs uppercase tracking-wider text-serene-300">Análise de Pele</p>
                     <p className="font-serif text-xl">Hidratação Profunda</p>
                   </div>
                   <div className="bg-serene-400 rounded-full p-1.5">
                     <Sparkles size={14} className="text-serene-900" />
                   </div>
                 </div>
                 <div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: "94%" }}
                     transition={{ duration: 1.5, delay: 1.2 }}
                     className="bg-serene-400 h-1.5 rounded-full"
                   />
                 </div>
                 <p className="text-right text-xs text-serene-300 mt-1">94% Eficácia</p>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-serene-50 to-transparent z-20 pointer-events-none" />
    </section>
  );
};