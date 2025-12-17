import React from 'react';
import { TECHNOLOGIES, COMPANY_INFO } from '../constants';
import { Zap, ShieldCheck, Microscope } from 'lucide-react';

const Technology = () => {
  return (
    <div className="animate-fade-up">
       <div className="pt-32 pb-24 text-center container mx-auto px-6">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Alta Performance</span>
          <h1 className="text-5xl md:text-7xl font-serif text-secondary mb-6">Tecnologias</h1>
          <p className="text-xl text-secondary/60 font-light max-w-2xl mx-auto">
             Equipamentos "Gold Standard" selecionados para garantir segurança absoluta e resultados superiores.
          </p>
       </div>

       <div className="container mx-auto px-6 pb-32">
          {/* Intro Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
             {[
               { icon: Microscope, title: "Ciência", desc: "Eficácia comprovada" },
               { icon: ShieldCheck, title: "Segurança", desc: "Aprovado pela ANVISA" },
               { icon: Zap, title: "Potência", desc: "Resultados em menos sessões" }
             ].map((item, i) => (
               <div key={i} className="glass-panel p-8 rounded-[2rem] text-center group hover:bg-white/60 transition-colors duration-500">
                  <item.icon className="mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-500" size={32} strokeWidth={1} />
                  <h3 className="font-serif text-xl text-secondary mb-1">{item.title}</h3>
                  <p className="text-secondary/50 text-sm font-light">{item.desc}</p>
               </div>
             ))}
          </div>

          <div className="space-y-16">
             {TECHNOLOGIES.map((tech) => (
               <div key={tech.id} className="bg-white rounded-[3rem] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-8 items-center group hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-shadow duration-700">
                  <div className="w-full md:w-1/3 h-64 md:h-80 overflow-hidden rounded-[2.5rem]">
                     <img src={tech.image} alt={tech.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-8">
                     <h2 className="text-3xl font-serif text-secondary mb-2">{tech.name}</h2>
                     <p className="text-primary text-xs font-bold uppercase tracking-widest mb-6">{tech.function}</p>
                     <p className="text-secondary/70 font-light leading-relaxed mb-8 max-w-2xl">
                        {tech.description}
                     </p>
                     
                     <div className="flex flex-wrap gap-3">
                        {tech.benefits.map((b, i) => (
                           <span key={i} className="px-4 py-2 bg-rose rounded-full text-secondary/70 text-sm font-light">
                              {b}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default Technology;