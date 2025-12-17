import React, { useState } from 'react';
import { COMPANY_INFO, FAQS } from '../constants';
import { MapPin, Phone, Mail, Clock, Plus, Minus, Send } from 'lucide-react';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="animate-fade-up">
       <div className="pt-32 pb-24 text-center container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-serif text-secondary mb-6">Contato</h1>
          <p className="text-xl text-secondary/60 font-light max-w-2xl mx-auto">
             Estamos aqui para ouvir você.
          </p>
       </div>

       <div className="container mx-auto px-6 pb-32">
          <div className="glass-panel rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
             {/* Decorative */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px] -z-10"></div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Info */}
                <div className="space-y-12">
                   <div>
                      <h2 className="text-3xl font-serif text-secondary mb-8">Informações</h2>
                      <ul className="space-y-8">
                         <li className="flex gap-6 items-start">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary">
                               <MapPin size={20} />
                            </div>
                            <div>
                               <strong className="block text-secondary font-serif text-lg mb-1">Localização</strong>
                               <p className="text-secondary/60 font-light">{COMPANY_INFO.address}</p>
                            </div>
                         </li>
                         <li className="flex gap-6 items-start">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary">
                               <Phone size={20} />
                            </div>
                            <div>
                               <strong className="block text-secondary font-serif text-lg mb-1">Fale Conosco</strong>
                               <p className="text-secondary/60 font-light">{COMPANY_INFO.phone}</p>
                               <a href={COMPANY_INFO.whatsappLink} className="text-primary text-sm hover:underline">Iniciar conversa no WhatsApp</a>
                            </div>
                         </li>
                      </ul>
                   </div>
                   
                   <div className="h-64 rounded-[2rem] overflow-hidden bg-white/50">
                       <div className="w-full h-full flex items-center justify-center text-secondary/40 text-sm font-light bg-stone-100">
                          Mapa Interativo (Google Maps)
                       </div>
                   </div>
                </div>

                {/* Form */}
                <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white/40 shadow-lg">
                   <h2 className="text-2xl font-serif text-secondary mb-8">Envie uma mensagem</h2>
                   <form className="space-y-6">
                      <div className="space-y-1">
                         <label className="text-xs uppercase tracking-widest text-secondary/60 pl-4">Nome</label>
                         <input type="text" className="w-full bg-white/80 border-0 rounded-full py-4 px-6 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-secondary" placeholder="Seu nome completo" />
                      </div>
                      <div className="space-y-1">
                         <label className="text-xs uppercase tracking-widest text-secondary/60 pl-4">Contato</label>
                         <input type="tel" className="w-full bg-white/80 border-0 rounded-full py-4 px-6 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-secondary" placeholder="(DD) 99999-9999" />
                      </div>
                      <div className="space-y-1">
                         <label className="text-xs uppercase tracking-widest text-secondary/60 pl-4">Mensagem</label>
                         <textarea rows={4} className="w-full bg-white/80 border-0 rounded-[2rem] py-4 px-6 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-secondary resize-none" placeholder="Como podemos ajudar você?"></textarea>
                      </div>
                      <button className="w-full bg-secondary text-white py-4 rounded-full font-medium tracking-wide hover:bg-primary transition-all duration-500 shadow-lg">
                         Enviar Mensagem
                      </button>
                   </form>
                </div>
             </div>
          </div>
       </div>

       {/* FAQ - Minimal Accordion */}
       <div className="container mx-auto px-6 pb-24 max-w-3xl">
          <h2 className="text-3xl font-serif text-secondary text-center mb-12">Dúvidas Frequentes</h2>
          <div className="space-y-4">
             {FAQS.map((faq, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-sm rounded-[2rem] border border-white/60 overflow-hidden transition-all duration-500 hover:bg-white/80">
                   <button onClick={() => toggleFaq(i)} className="w-full p-6 flex justify-between items-center text-left">
                      <span className="font-serif text-lg text-secondary">{faq.question}</span>
                      <span className={`text-primary transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                         <Plus />
                      </span>
                   </button>
                   {openFaq === i && (
                      <div className="px-6 pb-6 text-secondary/60 font-light leading-relaxed animate-fade-in">
                         {faq.answer}
                      </div>
                   )}
                </div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default Contact;