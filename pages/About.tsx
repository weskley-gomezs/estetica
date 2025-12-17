import React from 'react';
import { TEAM } from '../constants';

const About = () => {
  return (
    <div className="animate-fade-up">
      {/* Intro */}
      <div className="relative py-32 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-serif text-secondary mb-6">Nossa Essência</h1>
          <p className="text-xl text-secondary/60 font-light max-w-2xl mx-auto leading-relaxed">
            Mais do que uma clínica, um santuário de autoestima onde a ciência serve à sua beleza natural.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/40 rounded-full blur-[100px] -z-10"></div>
      </div>

      {/* The Story - Organic Layout */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                 <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1000" 
                      alt="Interior da Clínica" 
                      className="rounded-[3rem] shadow-xl z-10 relative"
                    />
                    <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-primary/20 rounded-[3rem] -z-0"></div>
                 </div>
              </div>
              <div className="md:w-1/2 space-y-8">
                 <h2 className="text-4xl font-serif text-secondary">A Beleza da <br/> <span className="italic text-primary">Individualidade</span></h2>
                 <div className="space-y-6 text-secondary/70 font-light text-lg leading-loose">
                   <p>
                     Acreditamos que não existe um padrão de beleza único. Existe o seu. Fundada com o propósito de fugir das harmonizações padronizadas, a Lumina nasceu para celebrar os traços que tornam você única.
                   </p>
                   <p>
                     Nossa abordagem é o "Slow Beauty": dedicamos tempo para ouvir, analisar e planejar cada detalhe. Sem pressa, sem exageros. Apenas a melhor versão de quem você já é.
                   </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Team - Elegant Cards */}
      <section className="py-32 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-secondary text-center mb-20">Especialistas em Você</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {TEAM.map((member) => (
              <div key={member.id} className="group">
                 <div className="overflow-hidden rounded-t-[3rem] rounded-b-[1rem] mb-6 relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </div>
                 <div className="text-center">
                    <h3 className="text-2xl font-serif text-secondary">{member.name}</h3>
                    <p className="text-primary text-xs uppercase tracking-widest mt-2 mb-4">{member.role}</p>
                    <p className="text-secondary/60 font-light text-sm max-w-md mx-auto">{member.bio}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32">
         <div className="container mx-auto px-6 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div>
                  <h4 className="font-serif text-2xl text-secondary mb-4">Ética</h4>
                  <p className="font-light text-secondary/60">Transparência absoluta sobre possibilidades e resultados.</p>
               </div>
               <div>
                  <h4 className="font-serif text-2xl text-secondary mb-4">Segurança</h4>
                  <p className="font-light text-secondary/60">Ambiente estéril e produtos de rastreabilidade garantida.</p>
               </div>
               <div>
                  <h4 className="font-serif text-2xl text-secondary mb-4">Acolhimento</h4>
                  <p className="font-light text-secondary/60">Um abraço em forma de atendimento, desde a recepção.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;