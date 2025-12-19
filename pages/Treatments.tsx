
import React from 'react';
import { TREATMENTS, COMPANY_INFO } from '../constants';
import { Clock, Sparkles } from 'lucide-react';

const Treatments = () => {
  return (
    <div className="animate-fade-up">
       {/* Header */}
       <div className="pt-32 pb-24 text-center container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-serif text-secondary mb-6">Menu de Tratamentos</h1>
          <p className="text-xl text-secondary/60 font-light max-w-2xl mx-auto">
            Rituais de beleza desenhados para despertar sua melhor versão.
          </p>
       </div>

       <div className="container mx-auto px-6 pb-32 space-y-32">
         {TREATMENTS.map((treatment, index) => (
           <div key={treatment.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}>
             
             {/* Image - Soft Shape */}
             <div className="w-full md:w-1/2">
               <div className="relative group">
                  <div className={`absolute inset-0 bg-primary/20 rounded-[3rem] transform ${index % 2 !== 0 ? 'rotate-3' : '-rotate-3'} transition-transform duration-700 group-hover:rotate-0`}></div>
                  <img 
                    src={treatment.image} 
                    alt={treatment.title} 
                    className="w-full h-[500px] object-cover rounded-[3rem] shadow-xl relative z-10" 
                  />
                  <div className="absolute bottom-10 right-10 z-20 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 shadow-lg">
                    <Clock size={16} className="text-primary" />
                    <span className="text-sm font-medium text-secondary">{treatment.duration}</span>
                  </div>
               </div>
             </div>

             {/* Content - Airy & Elegant */}
             <div className="w-full md:w-1/2 space-y-8">
               <h2 className="text-4xl md:text-5xl font-serif text-secondary">{treatment.title}</h2>
               <p className="text-lg text-secondary/70 font-light leading-relaxed">
                 {treatment.fullDescription}
               </p>
               
               <div className="space-y-6 pt-4">
                  <div className="glass-panel p-6 rounded-2xl">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                       <Sparkles size={14} /> Benefícios
                    </h4>
                    <ul className="space-y-2">
                       {treatment.benefits.map((b, i) => (
                         <li key={i} className="text-secondary/80 font-light flex items-start gap-3 text-sm">
                           <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                           {b}
                         </li>
                       ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                     <a 
                       href={`https://wa.me/5561981535040?text=Olá%20Weskley,%20vi%20o%20site%20modelo%20Lumina%20e%20gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(treatment.title)}`}
                       className="px-8 py-3 bg-secondary text-white rounded-full font-medium hover:bg-primary transition-colors duration-500 shadow-lg text-center"
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       Agendar Sessão
                     </a>
                  </div>
               </div>
             </div>
           </div>
         ))}
       </div>

       {/* Closing */}
       <div className="pb-32 text-center">
         <p className="text-secondary/50 font-serif italic text-lg">
           "A beleza é o iluminar da alma."
         </p>
       </div>
    </div>
  );
};

export default Treatments;
