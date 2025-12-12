import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="about" className="py-32 bg-serene-50 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <motion.div 
              className="relative z-10 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://picsum.photos/seed/doctor_spa/800/1000" 
                alt="Dra. Fundadora" 
                className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            
            {/* Animated Frame Border */}
            <motion.div 
              className="absolute inset-0 border-2 border-serene-300 rounded-tr-[100px] rounded-bl-[100px] -z-0"
              animate={{ 
                x: [15, 25, 15], 
                y: [15, 25, 15] 
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Floating Decorative Circle */}
            <motion.div 
              className="absolute -top-10 -left-10 w-32 h-32 bg-serene-200/50 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="font-sans text-serene-500 uppercase tracking-widest text-sm font-bold mb-4">
                Sobre a Clínica
              </h4>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-serene-900 mb-8 leading-tight">
                Um refúgio de <br/>
                <span className="italic">cuidado e beleza</span>.
              </h2>
              
              <div className="space-y-6 text-satin-800/80 font-sans text-lg leading-relaxed">
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

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-4xl text-serene-600 mb-1">10+</h3>
                  <p className="text-sm uppercase tracking-wide text-satin-800/60">Anos de Experiência</p>
                </div>
                <div>
                  <h3 className="font-serif text-4xl text-serene-600 mb-1">5k+</h3>
                  <p className="text-sm uppercase tracking-wide text-satin-800/60">Pacientes Transformados</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};