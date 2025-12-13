import React from 'react';
import { motion } from 'framer-motion';
import { Feather } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceDetail } from '../data/servicesData';

interface ServicesProps {
  onSelectService: (service: ServiceDetail) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 md:py-24 bg-gradient-to-b from-serene-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-serif text-3xl md:text-5xl text-serene-900 mb-4 md:mb-6"
          >
            Nossos Tratamentos
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-16 md:w-24 h-1 bg-serene-300 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
              onClick={() => onSelectService(service)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: ServiceDetail; index: number; onClick: () => void }> = ({ service, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Menos movimento vertical na entrada
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }} // Ativa quando 10% do elemento entra na tela (antes era 50% implícito)
      transition={{ delay: index * 0.05, duration: 0.5 }} // Delay menor entre cards
      whileHover={{ y: -5 }} // Movimento menor no hover
      className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-float transition-all duration-300 border border-serene-100 flex flex-col h-full active:scale-[0.98]"
      onClick={onClick}
    >
      {/* Background Hover Effect - Desktop Only via media query logic in CSS mostly, here logic handled by simple opacity */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-serene-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-12 h-12 md:w-14 md:h-14 bg-serene-50 rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-serene-600 group-hover:bg-serene-500 group-hover:text-white transition-colors duration-300">
        <service.icon size={24} className="md:w-7 md:h-7" strokeWidth={1.5} />
      </div>

      <h3 className="font-serif text-xl md:text-2xl text-serene-900 mb-2 md:mb-3">{service.title}</h3>
      <p className="font-sans text-satin-800/70 leading-relaxed text-sm mb-4 md:mb-6 flex-grow line-clamp-3">
        {service.description}
      </p>

      <div 
        className="mt-auto flex items-center gap-2 text-serene-500 text-sm font-medium opacity-100 group-hover:text-serene-700 transition-all duration-300"
      >
        <span>Saiba mais</span>
        <Feather size={14} />
      </div>
    </motion.div>
  );
};