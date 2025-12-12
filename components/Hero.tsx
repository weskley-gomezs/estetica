import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-serene-200/30 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-serene-300/20 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4"
        />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 relative z-10">
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
            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="relative inline-block">
              <span className="inline-block py-1 px-3 rounded-full bg-serene-100 text-serene-800 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                Clínica de Estética Integrativa
              </span>
              <motion.div 
                className="absolute -top-3 -right-5 text-serene-300"
                animate={{ 
                  opacity: [0, 0.8, 0], 
                  scale: [0.5, 1.2, 0.5], 
                  rotate: [0, 45] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Sparkles size={20} strokeWidth={1} />
              </motion.div>
            </motion.div>
            
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-serene-900 leading-[1.1] mb-8"
            >
              Revele sua <br/>
              <span className="italic font-light text-serene-500">verdadeira</span> essência.
            </motion.h1>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="font-sans text-satin-800/80 text-lg md:text-xl leading-relaxed max-w-xl mb-10"
            >
              Uma abordagem autoral onde a ciência encontra a arte. 
              Protocolos exclusivos desenhados para realçar sua beleza natural com leveza e sofisticação.
            </motion.p>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-4"
            >
              <Button className="pl-8 pr-6">
                Agendar Avaliação
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </Button>
              <Button variant="outline">
                Conheça nossos Serviços
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Image / Visual */}
        <div className="lg:col-span-5 relative h-[600px] hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {/* Main Image */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-float">
               <img 
                 src="https://picsum.photos/seed/aesthetics1/800/1200" 
                 alt="Estética Facial" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-serene-900/10 mix-blend-overlay" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 max-w-xs"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-serene-100 flex items-center justify-center text-serene-600">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles size={18} />
                  </motion.div>
                </div>
                <div>
                  <p className="font-serif text-lg text-serene-900 leading-none">Resultados</p>
                  <p className="text-xs text-satin-800/60 uppercase tracking-wider">Reais e Naturais</p>
                </div>
              </div>
              <p className="text-sm text-satin-800/80 italic font-serif">
                "Uma experiência transformadora que renovou minha autoestima."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};