import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carolina Mendes",
    role: "Empresária",
    text: "A delicadeza do atendimento é impressionante. Sinto que minha pele rejuvenesceu 10 anos, mas de forma tão natural que ninguém diz que fiz procedimentos.",
    image: "https://picsum.photos/seed/user1/200/200"
  },
  {
    id: 2,
    name: "Fernanda Lima",
    role: "Advogada",
    text: "O ambiente é pura paz. Fiz o protocolo de harmonização e fiquei encantada com o respeito às minhas características naturais. Super recomendo!",
    image: "https://picsum.photos/seed/user2/200/200"
  },
  {
    id: 3,
    name: "Beatriz Costa",
    role: "Arquiteta",
    text: "Encontrei aqui o equilíbrio perfeito entre tecnologia e cuidado humano. O Laser Lavieen mudou completamente a textura do meu rosto.",
    image: "https://picsum.photos/seed/user3/200/200"
  }
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-serene-800 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="mb-8 text-serene-300">
                <Quote size={48} className="rotate-180" />
              </div>
              
              <h3 className="font-serif text-2xl md:text-4xl leading-relaxed mb-10 italic">
                "{testimonials[current].text}"
              </h3>

              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-14 h-14 rounded-full border-2 border-serene-400 p-1"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </motion.div>
                <div className="text-left">
                  <p className="font-sans font-bold text-lg">{testimonials[current].name}</p>
                  <p className="font-sans text-serene-300 text-sm tracking-wider uppercase">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex gap-2 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === idx ? 'w-8 bg-serene-300' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};