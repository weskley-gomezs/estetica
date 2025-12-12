import React from 'react';
import { motion } from 'framer-motion';
import { Feather, Droplets, Sun, Activity, User, Heart } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Harmonização Natural',
    description: 'Protocolos minimamente invasivos que respeitam seus traços únicos.',
    icon: User,
  },
  {
    id: '2',
    title: 'Bioestimuladores',
    description: 'Ativação profunda de colágeno para uma pele firme e radiante.',
    icon: Activity,
  },
  {
    id: '3',
    title: 'Spa Facial',
    description: 'Limpeza, hidratação e massagens que renovam a textura da pele.',
    icon: Droplets,
  },
  {
    id: '4',
    title: 'Laser Lavieen',
    description: 'Tecnologia de ponta para o "efeito BB Glow" permanente.',
    icon: Sun,
  },
  {
    id: '5',
    title: 'Microagulhamento',
    description: 'Renovação celular para cicatrizes, poros e textura irregular.',
    icon: Feather,
  },
  {
    id: '6',
    title: 'Nutrologia Estética',
    description: 'Cuidado de dentro para fora, focando na saúde da pele e longevidade.',
    icon: Heart,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-serene-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-serene-900 mb-6"
          >
            Nossos Tratamentos
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-serene-300 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-float transition-all duration-500 border border-serene-100"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-serene-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      
      <div className="w-14 h-14 bg-serene-50 rounded-2xl flex items-center justify-center mb-6 text-serene-600 group-hover:bg-serene-500 group-hover:text-white transition-colors duration-300">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <service.icon size={28} strokeWidth={1.5} />
        </motion.div>
      </div>

      <h3 className="font-serif text-2xl text-serene-900 mb-3">{service.title}</h3>
      <p className="font-sans text-satin-800/70 leading-relaxed text-sm">
        {service.description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-serene-500 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
        <span>Saiba mais</span>
        <Feather size={14} />
      </div>
    </motion.div>
  );
};