import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { openWhatsApp } from '../utils/constants';

export const Contact: React.FC = () => {
  const handleWhatsApp = () => {
    openWhatsApp();
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h2 className="font-serif text-5xl text-serene-900 mb-8">
              Inicie sua jornada.
            </h2>
            <p className="text-satin-800/70 text-lg mb-12 font-sans">
              Estamos prontos para recebê-la em nosso espaço exclusivo.
              Agende sua avaliação e descubra o melhor de si.
            </p>

            <div className="space-y-8">
              <ContactItem icon={MapPin} title="Endereço" text="Av. Paulista, 1000 - Jardins, São Paulo" />
              <ContactItem icon={Phone} title="Telefone" text="(11) 99999-9999" />
              <ContactItem icon={Mail} title="Email" text="contato@serene.com.br" />
              <ContactItem icon={Clock} title="Horário" text="Seg - Sex: 09h às 20h" />
            </div>
          </div>

          {/* Form / Actions */}
          <div className="bg-serene-50 p-10 rounded-3xl shadow-float border border-serene-100 flex flex-col justify-center">
            <h3 className="font-serif text-3xl text-serene-800 mb-6">Atendimento Exclusivo</h3>
            <p className="text-satin-800/70 mb-8">
              Para oferecer um atendimento mais ágil e personalizado, centralizamos nossos agendamentos via WhatsApp.
            </p>
            
            <Button onClick={handleWhatsApp} className="w-full justify-center bg-green-600 hover:bg-green-700 border-none shadow-none hover:shadow-lg">
              <MessageCircle className="mr-2" />
              Chamar no WhatsApp
            </Button>
            
            <p className="text-center text-xs text-satin-800/40 mt-6">
              Nossa equipe responderá o mais breve possível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem: React.FC<{ icon: any, title: string, text: string }> = ({ icon: Icon, title, text }) => (
  <motion.div 
    className="flex items-start gap-4"
    whileHover={{ x: 5 }}
  >
    <div className="w-12 h-12 bg-serene-100 rounded-full flex items-center justify-center text-serene-600 shrink-0">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="font-serif text-lg text-serene-900">{title}</h4>
      <p className="text-satin-800/60 text-sm">{text}</p>
    </div>
  </motion.div>
);