import { Feather, Droplets, Sun, Activity, User, Heart } from 'lucide-react';
import { Service } from '../types';

export interface ServiceDetail extends Service {
  longDescription: string;
  benefits: string[];
  image: string;
  procedureDetails: string;
  safetyInfo: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: '1',
    title: 'Harmonização Natural',
    description: 'Protocolos minimamente invasivos que respeitam seus traços únicos.',
    longDescription: 'Nossa abordagem de Harmonização Facial é baseada no conceito de "Positive Aging". Não buscamos transformar seu rosto, mas sim gerenciar o processo de envelhecimento com elegância. Utilizamos uma arquitetura facial detalhada para reposicionar tecidos e devolver a estrutura perdida, sempre priorizando a naturalidade e a preservação da sua identidade.',
    benefits: ['Definição do contorno mandibular (Jawline)', 'Suavização do sulco nasogeniano ("bigode chinês")', 'Restauração de volume nas regiões malar e zigomática', 'Efeito "Top Model Look" sutil', 'Correção de assimetrias leves'],
    procedureDetails: 'O procedimento é realizado sob anestesia tópica ou bloqueio local para máximo conforto. Utilizamos ácido hialurônico de alta reticulação e pureza, injetado em pontos estratégicos (MD Codes) através de microcânulas, o que reduz significativamente o risco de hematomas e aumenta a segurança vascular.',
    safetyInfo: [
      'Pode ocorrer leve inchaço (edema) e vermelhidão por 24-48h.',
      'Risco baixo de hematomas que desaparecem em poucos dias.',
      'Contraindicado para gestantes, lactantes e portadores de doenças autoimunes ativas.',
      'Recomenda-se evitar atividade física intensa nas primeiras 24h.'
    ],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    icon: User,
  },
  {
    id: '2',
    title: 'Bioestimuladores',
    description: 'Ativação profunda de colágeno para uma pele firme e radiante.',
    longDescription: 'Os bioestimuladores (como Sculptra®, Radiesse® e Elleva®) são a base da poupança de colágeno. Diferente dos preenchedores, eles não dão volume imediato, mas instigam seus fibroblastos a produzirem colágeno novo tipo I e III. É o tratamento ideal para tratar a flacidez tecidual e melhorar a qualidade dérmica a longo prazo.',
    benefits: ['Aumento da espessura dérmica', 'Efeito lifting gradual e natural', 'Melhora da celulite (em aplicações corporais)', 'Resultados duradouros (até 24 meses)', 'Prevenção do "derretimento" facial'],
    procedureDetails: 'A substância é injetada na derme profunda ou subdérmica através de cânulas, criando uma bio-trama de sustentação. O procedimento dura cerca de 30 minutos. O paciente deve realizar massagens na região (regra dos 5: 5 vezes ao dia, por 5 minutos, por 5 dias) para garantir a distribuição uniforme do produto (no caso do ácido poli-L-lático).',
    safetyInfo: [
      'Pequenos nódulos palpáveis podem ocorrer se não massageado corretamente.',
      'Edema leve é esperado no pós-procedimento imediato.',
      'Não indicado para quem possui preenchedores definitivos (PMMA) na região.',
      'Risco mínimo de alergia, pois os materiais são biocompatíveis e reabsorvíveis.'
    ],
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop',
    icon: Activity,
  },
  {
    id: '3',
    title: 'Spa Facial',
    description: 'Limpeza, hidratação e massagens que renovam a textura da pele.',
    longDescription: 'Nosso Spa Facial não é apenas uma limpeza de pele, é um ritual de renovação celular. Combinamos a limpeza profunda (extração de comedões) com peelings ultrassônicos, máscaras de pedras preciosas e drenagem linfática facial para desintoxicar o sistema linfático da face, reduzindo inchaço e melhorando o contorno.',
    benefits: ['Desobstrução profunda dos poros', 'Oxigenação tecidual', 'Relaxamento da musculatura da mímica facial', 'Preparo da pele para receber outros injetáveis', 'Glow imediato para eventos'],
    procedureDetails: 'Iniciamos com higienização e esfoliação física/química suave. Utilizamos vapor de ozônio para emoliência, seguido de extração manual delicada. Finalizamos com alta frequência (bactericida), massagem lifting e máscaras oclusivas ricas em ácido hialurônico e vitaminas.',
    safetyInfo: [
      'Pele pode ficar levemente sensível logo após a extração.',
      'Uso obrigatório de filtro solar após o procedimento.',
      'Informar caso tenha alergia a componentes cosméticos (ex: ácidos, fragrâncias).',
      'Seguro para gestantes (com adaptação de produtos).'
    ],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop',
    icon: Droplets,
  },
  {
    id: '4',
    title: 'Laser Lavieen',
    description: 'Tecnologia de ponta para o "efeito BB Glow" permanente.',
    longDescription: 'O Laser Lavieen (Thulium 1927nm) é uma tecnologia revolucionária de resurfacing não-ablativo. Ele atua na junção dermo-epidérmica, preservando a camada córnea (pele externa), o que garante uma recuperação rapidíssima. É conhecido mundialmente por proporcionar o efeito "Make-up Free", tratando pigmentos, poros e textura simultaneamente.',
    benefits: ['Fechamento de poros dilatados', 'Clareamento de melasma e manchas solares', 'Uniformização do tom da pele (efeito BB Cream)', 'Tratamento de queda capilar (protocolo capilar)', 'Rejuvenescimento das mãos e colo'],
    procedureDetails: 'O laser cria microcanais térmicos na pele sem romper a barreira externa. Durante a sessão, sente-se um leve formigamento e calor. Aplicamos anestésico tópico potente 20 minutos antes para garantir conforto total. A sessão dura cerca de 15 a 20 minutos.',
    safetyInfo: [
      'Vermelhidão e leve ardor (similar a queimadura de sol) por 2-3 horas pós-sessão.',
      'A pele ficará áspera (micro-crostas invisíveis) por 3 a 5 dias.',
      'Proibida exposição solar direta sem proteção por 7 dias.',
      'Contraindicado em pele bronzeada recente ou infecções ativas no local.'
    ],
    image: 'https://www.lilianenascimento.com.br/wp-content/uploads/2023/06/lavieen-e1685665354860.jpg',
    icon: Sun,
  },
  {
    id: '5',
    title: 'Microagulhamento',
    description: 'Renovação celular para cicatrizes, poros e textura irregular.',
    longDescription: 'Utilizamos a tecnologia de Microagulhamento Robótico ou Dermapen de alta precisão. O procedimento cria milhares de microlesões controladas na pele, desencadeando uma cascata de reparação natural que produz colágeno novo. Associamos a técnica ao "Drug Delivery", entregando fatores de crescimento estéreis diretamente na derme.',
    benefits: ['Redução significativa de cicatrizes de acne', 'Suavização de estrias brancas e vermelhas', 'Melhora do melasma dérmico (resistente)', 'Redução de rugas finas', 'Controle da oleosidade'],
    procedureDetails: 'Após anestesia tópica, o dispositivo desliza sobre a pele ajustando a profundidade das agulhas (0.5mm a 2.5mm) conforme a área e o objetivo. É aplicado um blend de ativos estéreis (vitamina C, ácido tranexâmico, fatores de crescimento) que penetram profundamente pelos canais abertos.',
    safetyInfo: [
      'Eritema (vermelhidão) intenso é esperado e desejável, durando 24-48h.',
      'Descamação leve pode ocorrer a partir do 3º dia.',
      'Risco de hiperpigmentação se houver exposição solar precoce.',
      'Contraindicado em casos de acne ativa (pústulas), queloides ou uso de anticoagulantes.'
    ],
    image: 'https://julianafonte.com.br/wp-content/uploads/2018/02/microagulhamento-750x500.jpg',
    icon: Feather,
  },
  {
    id: '6',
    title: 'Nutrologia Estética',
    description: 'Cuidado de dentro para fora, focando na saúde da pele e longevidade.',
    longDescription: 'A beleza é um reflexo da saúde interna. Nossa abordagem de Nutrologia Estética investiga o terreno biológico do paciente. Analisamos marcadores de inflamação, glicação (quebra de colágeno pelo açúcar) e estresse oxidativo para criar protocolos de suplementação oral e injetável (soroterapia) que otimizam os resultados estéticos.',
    benefits: ['Melhora da densidade capilar e unhas', 'Pele mais hidratada e resistente', 'Controle da acne da mulher adulta', 'Aumento da disposição e energia', 'Otimização do ganho de massa magra'],
    procedureDetails: 'Inicia-se com uma anamnese detalhada e solicitação de exames laboratoriais específicos. Com base nos resultados, elaboramos um plano alimentar e prescrevemos nutracêuticos personalizados ou protocolos de soroterapia (vitaminas na veia) realizados na clínica.',
    safetyInfo: [
      'Tratamento individualizado; o que funciona para um pode não servir para outro.',
      'Necessário acompanhamento periódico para ajuste de doses.',
      'Informar uso de qualquer medicação contínua.',
      'Foco em saúde a longo prazo, não em dietas restritivas de curto prazo.'
    ],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop',
    icon: Heart,
  },
];