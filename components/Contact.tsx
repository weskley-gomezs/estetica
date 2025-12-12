import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
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

          {/* Form */}
          <div className="bg-serene-50 p-10 rounded-3xl shadow-float border border-serene-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputWrapper label="Nome">
                  <input type="text" className="w-full bg-white border border-serene-200 rounded-lg p-3 focus:ring-2 focus:ring-serene-300 focus:border-transparent outline-none transition-all" />
                </InputWrapper>
                <InputWrapper label="Telefone">
                  <input type="tel" className="w-full bg-white border border-serene-200 rounded-lg p-3 focus:ring-2 focus:ring-serene-300 focus:border-transparent outline-none transition-all" />
                </InputWrapper>
              </div>
              <InputWrapper label="Email">
                <input type="email" className="w-full bg-white border border-serene-200 rounded-lg p-3 focus:ring-2 focus:ring-serene-300 focus:border-transparent outline-none transition-all" />
              </InputWrapper>
              <InputWrapper label="Mensagem">
                <textarea rows={4} className="w-full bg-white border border-serene-200 rounded-lg p-3 focus:ring-2 focus:ring-serene-300 focus:border-transparent outline-none transition-all" />
              </InputWrapper>
              
              <Button className="w-full justify-center mt-4">
                Enviar Mensagem
              </Button>
            </form>
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

const InputWrapper: React.FC<{ label: string, children: React.ReactNode }> = ({ label, children }) => (
  <div>
    <label className="block text-xs font-bold uppercase tracking-wider text-serene-600 mb-2">{label}</label>
    {children}
  </div>
);