import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, MessageCircle, ShieldAlert, Sparkles, AlertCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { ServiceDetail } from '../data/servicesData';
import { openWhatsApp } from '../utils/constants';

interface TreatmentDetailProps {
  service: ServiceDetail;
  onBack: () => void;
}

export const TreatmentDetail: React.FC<TreatmentDetailProps> = ({ service, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="min-h-screen bg-white pt-24 pb-12"
    >
      <div className="container mx-auto px-6">
        {/* Header Navigation */}
        <motion.button 
          variants={itemVariants}
          onClick={onBack}
          className="group flex items-center gap-2 text-serene-600 mb-8 font-medium hover:text-serene-800 transition-colors"
        >
          <div className="p-2 rounded-full bg-serene-50 group-hover:bg-serene-100 transition-colors">
            <ArrowLeft size={20} />
          </div>
          Voltar para Início
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Image - Left Side (Desktop) / Top (Mobile) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 relative rounded-[2rem] overflow-hidden shadow-2xl h-[400px] lg:h-[650px] sticky top-32"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-serene-900/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                   <service.icon size={24} className="text-white" />
                 </div>
                 <span className="uppercase tracking-widest text-xs font-bold bg-serene-500/80 px-3 py-1 rounded-full backdrop-blur-sm">
                    Protocolo Premium
                 </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">{service.title}</h2>
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Description */}
            <motion.div variants={itemVariants}>
              <h1 className="font-serif text-4xl md:text-5xl text-serene-900 mb-6">Sobre o Tratamento</h1>
              <div className="h-1 w-20 bg-serene-300 rounded-full mb-8" />
              <p className="text-satin-800/80 text-lg leading-relaxed font-sans text-justify">
                {service.longDescription}
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div variants={itemVariants} className="bg-serene-50 p-8 rounded-3xl border border-serene-100">
              <h3 className="font-serif text-2xl text-serene-800 mb-6 flex items-center gap-2">
                <Sparkles size={20} className="text-serene-500" /> Principais Benefícios
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 text-satin-800/80">
                    <CheckCircle size={18} className="text-serene-400 shrink-0 mt-1" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Procedure Protocol */}
            <motion.div variants={itemVariants}>
              <h3 className="font-serif text-2xl text-serene-800 mb-4 border-l-4 border-serene-300 pl-4">
                Protocolo do Procedimento
              </h3>
              <p className="text-satin-800/70 leading-relaxed font-sans bg-white border border-satin-200 p-6 rounded-2xl">
                {service.procedureDetails}
              </p>
            </motion.div>

            {/* Safety & Contraindications */}
            <motion.div variants={itemVariants} className="bg-orange-50/50 p-8 rounded-3xl border border-orange-100">
              <h3 className="font-serif text-2xl text-orange-800 mb-6 flex items-center gap-2">
                <ShieldAlert size={20} className="text-orange-500" /> Segurança e Cuidados
              </h3>
              <ul className="space-y-3">
                {service.safetyInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-3 text-orange-900/80 text-sm">
                    <AlertCircle size={16} className="text-orange-400 shrink-0 mt-0.5" />
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-orange-800/50 mt-6 italic border-t border-orange-200 pt-4">
                * Uma avaliação presencial é indispensável para determinar a aptidão para este procedimento.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-serene-100">
              <Button 
                onClick={() => openWhatsApp(`Olá, Weskley! Gostaria de comprar este site/template. Vi a página do serviço: ${service.title}.`)}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white border-none shadow-green-200 flex-1 justify-center"
              >
                <MessageCircle size={20} />
                Agendar Avaliação
              </Button>
              <Button 
                variant="outline" 
                onClick={onBack}
                className="w-full sm:w-auto flex-1 justify-center"
              >
                Explorar outros serviços
              </Button>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};