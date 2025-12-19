
import { TeamMember, Treatment, Technology, Testimonial, FAQItem, BeforeAfterItem } from './types';

export const COMPANY_INFO = {
  name: "Lumina Estética Avançada",
  phone: "(61) 98153-5040",
  address: "Edifício Prime Business, Salas 401-403 - Brasília, DF",
  hours: "Segunda a Sexta: 08h às 20h | Sábado: 09h às 15h",
  whatsappLink: "https://wa.me/5561981535040?text=Olá%20Weskley,%20vi%20o%20site%20modelo%20Lumina%20e%20queria%20mais%20informações...",
  bookingLink: "#agendamento",
  instagram: "@luminaestetica",
  email: "contato@luminaestetica.com.br",
  technicalResponsible: "Dra. Juliana Mendes - CRBM 12345/DF"
};

export const TEAM: TeamMember[] = [
  {
    id: "1",
    name: "Dra. Juliana Mendes",
    role: "Diretora Clínica & Especialista em Harmonização",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600",
    registration: "CRBM 12345/DF",
    bio: "Pós-graduada em Estética Avançada e Anatomia Facial Aplicada. Referência em gerenciamento de pele e rejuvenescimento natural com mais de 5 mil procedimentos realizados.",
    specialties: ["Bioestimuladores", "Fios de Sustentação", "Mapeamento Facial"]
  },
  {
    id: "2",
    name: "Dr. Ricardo Alencar",
    role: "Dermatologista Clínico",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    registration: "CRM/DF 54321",
    bio: "Especialista pela Sociedade Brasileira de Dermatologia (SBD). Atua no protocolo de tecnologias de alta performance para tratamento de manchas e cicatrizes.",
    specialties: ["Melasmas", "Oncologia Cutânea", "Tecnologias Laser"]
  }
];

export const TREATMENTS: Treatment[] = [
  {
    id: "toxina-botulinica",
    title: "Toxina Botulínica",
    shortDescription: "Prevenção e suavização de rugas dinâmicas.",
    fullDescription: "Protocolo de aplicação personalizada que visa relaxar a musculatura de forma estratégica, mantendo a expressividade e eliminando o aspecto de cansaço.",
    targetAudience: "Pacientes que buscam prevenir o envelhecimento precoce e suavizar lines na testa e olhos.",
    benefits: ["Olhar mais descansado", "Prevenção de rugas estáticas", "Ajuste de assimetrias faciais"],
    process: "Aplicação pontual com microagulhas, precedida de mapeamento muscular.",
    duration: "30 min",
    prePostCare: "Não deitar ou baixar a cabeça por 4 horas após o procedimento.",
    contraindications: "Gestação, amamentação e alergia à albumina.",
    expectedResults: "Efeito inicia em 48h, com resultado final em 15 dias.",
    image: "https://www.beautycoestetica.com.br/wp-content/uploads/2020/06/mecanismo-de-acao-de-toxina-butolinica.jpg"
  },
  {
    id: "preenchimento-hialuronico",
    title: "Preenchimento com Ácido Hialurônico",
    shortDescription: "Volume, contorno e hidratação profunda.",
    fullDescription: "Utilizamos as melhores linhas de preenchedores para restaurar volumes perdidos, definir contornos e hidratar a pele de dentro para fora.",
    targetAudience: "Indicado para lábios, olheiras, maçãs do rosto e sulcos profundos.",
    benefits: ["Resultado imediato", "Bioestimulação leve", "Reversível e seguro"],
    process: "Injeção estratégica de gel de ácido hialurônico em diferentes camadas da derme.",
    duration: "45 min",
    prePostCare: "Evitar atividades físicas intensas nas primeiras 24 horas.",
    contraindications: "Doenças autoimunes ativas, alergia aos componentes.",
    expectedResults: "Resultado imediato com estabilização em 15-20 dias.",
    image: "https://d1ncsduzhm4cuo.cloudfront.net/Custom/Content/Products/29/54/2954952_preenchimento-acido-hialuronico_m1_638225259131228654.webp"
  },
  {
    id: "bioestimuladores",
    title: "Bioestimuladores de Colágeno",
    shortDescription: "A poupança de colágeno para sua pele.",
    fullDescription: "Produtos que estimulam seu próprio organismo a produzir colágeno novo, melhorando a densidade e firmeza da pele de forma progressiva.",
    targetAudience: "Ideal para tratamento de flacidez facial e corporal.",
    benefits: ["Efeito gradual e natural", "Melhora a textura da pele", "Alta durabilidade (até 2 anos)"],
    process: "Aplicação injetável de substâncias biocompatíveis como Sculptra ou Radiesse.",
    duration: "40 min",
    prePostCare: "Massagem local conforme orientação técnica em alguns casos.",
    contraindications: "Infecções no local da aplicação.",
    expectedResults: "Resultados começam a aparecer em 30-60 dias após a sessão.",
    image: "https://i0.wp.com/clinicamarinaceruti.com.br//wp-content/uploads/2023/01/bioestimulador-de-colageno-1024x683.jpg?resize=1024%2C683&ssl=1"
  },
  {
    id: "ultraformer-iii",
    title: "Ultraformer III",
    shortDescription: "Lifting facial e corporal sem cortes.",
    fullDescription: "A tecnologia de ultrassom focado e microfocado mais desejada do mundo para o tratamento da flacidez e contorno facial.",
    targetAudience: "Pessoas com flacidez inicial a moderada e que desejam evitar cirurgias.",
    benefits: ["Ancoragem muscular", "Efeito lifting imediato", "Redução de gordura localizada"],
    process: "Disparos de ondas de calor que atingem desde a derme até o SMAS (músculo).",
    duration: "45-90 min",
    prePostCare: "Uso de protetor solar e hidratação intensa.",
    contraindications: "Implantes metálicos na área tratada e feridas abertas.",
    expectedResults: "Pico de resultado em 3 meses após a sessão.",
    image: "https://mealthclinic.com.br/wp-content/uploads/2023/02/slide-ultraformer-ipad.jpg"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Os procedimentos são doloridos?",
    answer: "Trabalhamos com protocolos de conforto avançados, incluindo anestésicos tópicos de alta potência e resfriamento de pele, para que sua experiência seja a mais tranquila possível."
  },
  {
    question: "Como é feita a escolha dos produtos?",
    answer: "Utilizamos exclusivamente marcas 'Gold Standard' com registro na ANVISA e rastreabilidade total (Allergan, Galderma, Merz), garantindo segurança a longo prazo."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Mariana S. Costa",
    treatment: "Protocolo Glow & Toxina",
    text: "O que mais me impressionou foi o cuidado na avaliação. A Dra. Juliana explicou cada ponto. Meu rosto não ficou 'congelado', ficou apenas mais descansado e iluminado.",
    rating: 5
  },
  {
    id: "t2",
    name: "Fernanda Ribeiro",
    treatment: "Ultraformer Full Face",
    text: "Tinha muito receio de dor, mas o protocolo de conforto da clínica é excelente. Em 2 meses senti meu contorno da mandíbula voltar.",
    rating: 5
  }
];

export const TECHNOLOGIES: Technology[] = [
  {
    id: "ultraformer",
    name: "Ultraformer III",
    function: "Ultrassom Micro e Macrofocado",
    benefits: ["Estímulo de colágeno profundo", "Ancoragem muscular", "Sem downtime"],
    image: "https://www.ramagaproestetica.com.br/wp-content/uploads/2023/05/ultraformer-1.png",
    description: "Tecnologia que promove microcoagulação térmica, estimulando a regeneração do colágeno e a retração das fibras musculares."
  },
  {
    id: "lavieen",
    name: "Lavieen",
    function: "Laser de Tulium / BB Laser",
    benefits: ["Uniformização do tom da pele", "Tratamento de poros", "Glow imediato"],
    image: "https://cdn.awsli.com.br/800x800/708/708757/produto/226263188/carrossel-3-pvifsfqdy3.png",
    description: "Um laser não-ablativo versátil que regenera as camadas da pele, sendo excelente para melasma, acne e rejuvenescimento leve."
  },
  {
    id: "morpheus",
    name: "Morpheus 8",
    function: "Radiofrequência Microagulhada Fracionada",
    benefits: ["Remodelamento de gordura", "Firmeza intensa", "Tratamento de cicatrizes"],
    image: "https://img.medicalexpo.com/pt/images_me/photo-mg/4579544-20303023.jpg",
    description: "Combina microagulhamento com radiofrequência para penetrar profundamente na pele, tratando flacidez e gordura simultaneamente."
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: "labial",
    treatment: "Preenchimento Labial",
    description: "Volume e hidratação com ácido hialurônico",
    beforeImage: "https://cdn.pixabay.com/photo/2016/11/29/03/35/girl-1867092_640.jpg",
    afterImage: "https://cdn.pixabay.com/photo/2017/03/30/18/17/girl-2189247_640.jpg"
  },
  {
    id: "bio-ba",
    treatment: "Protocolo Bioestimulador",
    description: "Melhora da firmeza e densidade dérmica",
    beforeImage: "https://cdn.pixabay.com/photo/2019/11/06/05/57/woman-4605248_640.jpg",
    afterImage: "https://cdn.pixabay.com/photo/2016/02/19/11/49/model-1209985_640.jpg"
  },
  {
    id: "pele-masc",
    treatment: "Tratamento de Pele Masculino",
    description: "Renovação celular e controle de poros",
    beforeImage: "https://cdn.pixabay.com/photo/2016/11/29/03/52/man-1867175_640.jpg",
    afterImage: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_640.jpg"
  },
  {
    id: "harmonizacao-masc",
    treatment: "Harmonização Facial Masculina",
    description: "Definição de mandíbula e mento",
    beforeImage: "https://cdn.pixabay.com/photo/2016/09/02/22/40/man-1640460_640.jpg",
    afterImage: "https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761_640.jpg"
  }
];
