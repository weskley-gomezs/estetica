import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Verifica se é mobile para desativar o parallax pesado
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax suave apenas se NÃO for mobile. Se for mobile, valor é 0 (estático)
  const y = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -50]);

  return (
    <section id="about" className="py-24 md:py-32 bg-serene-50 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
            <motion.div 
              className="relative z-10 rounded-tr-[60px] rounded-bl-[60px] md:rounded-tr-[100px] md:rounded-bl-[100px] overflow-hidden shadow-xl md:shadow-2xl"
              style={{ y }} // Framer motion lida bem com a mudança dinâmica do valor de y
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://clinicademilhoes.com/wp-content/uploads/2022/10/Projeto-de-clinica-de-estetica-em-sao-paulo-tatuape-1.jpg" 
                alt="Interior da Clínica Serene" 
                className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            
            {/* Animated Frame Border - Simplificado no mobile */}
            <motion.div 
              className="absolute inset-0 border-2 border-serene-300 rounded-tr-[60px] rounded-bl-[60px] md:rounded-tr-[100px] md:rounded-bl-[100px] -z-0"
              animate={{ 
                x: [10, 20, 10], 
                y: [10, 20, 10] 
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Floating Decorative Circle - Apenas desktop ou estático no mobile para economizar bateria */}
            <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 h-24 md:w-32 md:h-32 bg-serene-200/50 rounded-full blur-2xl" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }} // Reduzido deslocamento para performance
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }} // Dispara antes (margin negativa menor)
              transition={{ duration: 0.6 }}
            >
              <h4 className="font-sans text-serene-500 uppercase tracking-widest text-xs md:text-sm font-bold mb-4">
                Sobre a Clínica
              </h4>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-serene-900 mb-6 md:mb-8 leading-tight">
                Um refúgio de <br/>
                <span className="italic">cuidado e beleza</span>.
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-satin-800/80 font-sans text-base md:text-lg leading-relaxed text-justify md:text-left">
                <p>
                  Fundada na crença de que a estética deve ser um prolongamento do bem-estar, 
                  nossa clínica oferece um ambiente onde o tempo desacelera.
                </p>
                <p>
                  Cada detalhe, da aromaterapia no ambiente à tecnologia dos nossos equipamentos, 
                  foi pensado para proporcionar uma experiência sensorial única. Não tratamos apenas a pele; 
                  cuidamos da pessoa que habita nela.
                </p>
              </div>

              <div className="mt-8 md:mt-12 grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl text-serene-600 mb-1">10+</h3>
                  <p className="text-xs md:text-sm uppercase tracking-wide text-satin-800/60">Anos de Experiência</p>
                </div>
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl text-serene-600 mb-1">5k+</h3>
                  <p className="text-xs md:text-sm uppercase tracking-wide text-satin-800/60">Pacientes Transformados</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};