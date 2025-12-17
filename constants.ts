import { TeamMember, Treatment, Technology, Testimonial, FAQItem, BeforeAfterItem } from './types';

export const COMPANY_INFO = {
  name: "Lumina Estética Avançada",
  phone: "(61) 98153-5040",
  address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
  hours: "Segunda a Sexta: 09h às 19h | Sábado: 09h às 14h",
  whatsappLink: "https://wa.me/5561981535040?text=Gostei%20desse%20site%20queria%20saber%20mais%20detalhes",
  bookingLink: "#agendamento",
  instagram: "@luminaestetica",
  email: "contato@luminaestetica.com.br"
};

export const TEAM: TeamMember[] = [
  {
    id: "1",
    name: "Dra. Juliana Mendes",
    role: "Diretora Técnica & Biomédica Esteta",
    image: "https://picsum.photos/id/64/400/400",
    registration: "CRBM 12345",
    bio: "Especialista em Harmonização Facial com mais de 10 anos de experiência clínica. Focada em resultados naturais que respeitam a anatomia individual.",
    specialties: ["Harmonização Facial", "Bioestimuladores", "Fios de Sustentação"]
  },
  {
    id: "2",
    name: "Dr. Ricardo Alencar",
    role: "Dermatologista Parceiro",
    image: "https://picsum.photos/id/91/400/400",
    registration: "CRM/SP 54321",
    bio: "Médico dermatologista focado em tecnologias de alta performance para rejuvenescimento e tratamento de melasma.",
    specialties: ["Lasers", "Ultraformer", "Dermatologia Clínica"]
  }
];

export const TREATMENTS: Treatment[] = [
  {
    id: "toxina-botulinica",
    title: "Toxina Botulínica (Botox)",
    shortDescription: "Prevenção e suavização de rugas dinâmicas e linhas de expressão.",
    fullDescription: "O tratamento padrão ouro para rejuvenescimento facial. A toxina atua relaxando a musculatura específica, prevenindo que as linhas de expressão se tornem rugas profundas (estáticas).",
    targetAudience: "Homens e mulheres que desejam suavizar pés de galinha, linhas na testa e entre as sobrancelhas.",
    benefits: [
      "Suavização das rugas",
      "Aparência mais descansada",
      "Prevenção do envelhecimento",
      "Elevação da cauda da sobrancelha (efeito lifting)"
    ],
    process: "Aplicação através de microinjeções em pontos estratégicos da face. O procedimento é rápido e praticamente indolor.",
    duration: "30 minutos (sessão). Duração do efeito: 4 a 6 meses.",
    prePostCare: "Evitar exercícios físicos por 24h após a aplicação. Não massagear a região. Não deitar por 4 horas.",
    contraindications: "Gestantes, lactantes, portadores de doenças neuromusculares ou infecção no local da aplicação.",
    expectedResults: "Início do efeito em 3 a 5 dias, com pico em 15 dias. Pele mais lisa e semblante leve.",
    image: "https://www.beautycoestetica.com.br/wp-content/uploads/2020/06/mecanismo-de-acao-de-toxina-butolinica.jpg"
  },
  {
    id: "preenchimento-labial",
    title: "Preenchimento com Ácido Hialurônico",
    shortDescription: "Devolução de volume, contorno e hidratação para face e lábios.",
    fullDescription: "Utilizamos ácido hialurônico de alta reticulação para repor volumes perdidos com o envelhecimento ou para embelezamento (beautification) de lábios, malar e mandíbula.",
    targetAudience: "Pessoas com perda de volume facial, lábios finos, olheiras profundas ou desejo de definição de contorno.",
    benefits: [
      "Volume imediato",
      "Definição de contorno (Top Model Look)",
      "Hidratação profunda",
      "Harmonização dos traços faciais"
    ],
    process: "Aplicação com agulha ou cânula (para maior segurança), esculpindo a região desejada.",
    duration: "45 a 60 minutos. Duração do efeito: 12 a 18 meses.",
    prePostCare: "Gelo local para evitar inchaço. Evitar exposição solar intensa se houver hematoma.",
    contraindications: "Alergia aos componentes, doenças autoimunes descompensadas, gravidez.",
    expectedResults: "Volume e contorno imediato, com resultado final após a redução do inchaço (aprox. 15 dias).",
    image: "https://d1ncsduzhm4cuo.cloudfront.net/Custom/Content/Products/29/54/2954952_preenchimento-acido-hialuronico_m1_638225259131228654.webp"
  },
  {
    id: "bioestimuladores",
    title: "Bioestimuladores de Colágeno",
    shortDescription: "Combate à flacidez facial e corporal estimulando seu próprio colágeno.",
    fullDescription: "Substâncias injetáveis (como Sculptra ou Radiesse) que provocam uma reação inflamatória controlada, induzindo o organismo a produzir colágeno novo.",
    targetAudience: "Pessoas com flacidez leve a moderada na face, pescoço, mãos ou corpo (bumbum, abdômen).",
    benefits: [
      "Melhora da firmeza da pele",
      "Efeito lifting gradual",
      "Melhora da textura dérmica",
      "Resultados naturais e duradouros"
    ],
    process: "Injeção do produto na derme profunda. Normalmente indicado protocolo de 3 sessões.",
    duration: "40 minutos. Resultados aparecem a partir de 30 dias.",
    prePostCare: "Massagem na região (dependendo do produto) por 5 dias. Vida normal imediata.",
    contraindications: "Doenças do colágeno, infecções ativas, gravidez.",
    expectedResults: "Pele mais firme e densa. O resultado não é volume, e sim qualidade de pele.",
    image: "https://i0.wp.com/clinicamarinaceruti.com.br//wp-content/uploads/2023/01/bioestimulador-de-colageno-1024x683.jpg?resize=1024%2C683&ssl=1"
  },
  {
    id: "ultraformer",
    title: "Ultraformer III (HIFU)",
    shortDescription: "Lifting facial não cirúrgico e redução de gordura localizada.",
    fullDescription: "Ultrassom micro e macrofocado que atinge as camadas mais profundas da pele e o músculo (SMAS), promovendo retração e ancoragem muscular.",
    targetAudience: "Flacidez de pálpebras, papada, contorno facial indefinido ou gordura localizada corporal.",
    benefits: [
      "Efeito lifting imediato (efeito cinderela) e tardio",
      "Redução da papada",
      "Fox Eyes (elevação do olhar)",
      "Sem cortes ou tempo de recuperação"
    ],
    process: "Aplicação de disparos de ultrassom que aquecem pontos profundos. Pode haver desconforto leve a moderado.",
    duration: "30 a 60 minutos. Sessão anual ou semestral.",
    prePostCare: "Não requer repouso. Pode haver leve inchaço ou sensibilidade ao toque.",
    contraindications: "Fios de sustentação recentes, feridas abertas, acne cística grave na área.",
    expectedResults: "Melhora do contorno facial e firmeza. O pico de colágeno ocorre em 3 meses.",
    image: "https://mealthclinic.com.br/wp-content/uploads/2023/02/slide-ultraformer-ipad.jpg"
  }
];

export const TECHNOLOGIES: Technology[] = [
  {
    id: "tech-1",
    name: "Ultraformer III",
    function: "Ultrassom Micro e Macrofocado",
    benefits: ["Lifting sem cortes", "Trata gordura e flacidez", "Recuperação imediata"],
    image: "https://www.ramagaproestetica.com.br/wp-content/uploads/2023/05/ultraformer-1.png",
    description: "Tecnologia de ponta para ancoragem muscular e estímulo de colágeno profundo. O padrão ouro para lifting não cirúrgico."
  },
  {
    id: "tech-2",
    name: "Lavieen",
    function: "Laser Thulium (BB Glow Effect)",
    benefits: ["Efeito maquiagem", "Trata manchas e poros", "Brilho e viço"],
    image: "https://cdn.awsli.com.br/800x800/708/708757/produto/226263188/carrossel-3-pvifsfqdy3.png",
    description: "Laser fracionado não ablativo que renova a camada superficial da pele, ideal para tratamento de melasma, manchas solares e textura."
  },
  {
    id: "tech-3",
    name: "Morpheus 8",
    function: "Radiofrequência Microagulhada",
    benefits: ["Retração de pele intensa", "Trata cicatrizes de acne", "Rejuvenescimento global"],
    image: "https://img.medicalexpo.com/pt/images_me/photo-mg/4579544-20303023.jpg",
    description: "A tecnologia queridinha das celebridades. Combina microagulhamento profundo com energia térmica para remodelar a gordura e a derme."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Os procedimentos estéticos são dolorosos?",
    answer: "A maioria dos procedimentos é minimamente invasiva e muito tolerável. Utilizamos anestésicos tópicos potentes e técnicas para minimizar o desconforto. Procedimentos como a Toxina Botulínica são praticamente indolores."
  },
  {
    question: "Quanto tempo dura o efeito do Botox?",
    answer: "A duração média é de 4 a 6 meses, variando conforme o organismo de cada paciente, nível de atividade física e força muscular. Recomendamos manutenção semestral."
  },
  {
    question: "Posso voltar a trabalhar no mesmo dia?",
    answer: "Sim! 95% dos nossos tratamentos não exigem tempo de recuperação (downtime). Você pode realizar o procedimento no horário de almoço e retornar às atividades, seguindo apenas cuidados simples."
  },
  {
    question: "A clínica aceita convênios?",
    answer: "Trabalhamos exclusivamente com atendimentos particulares para garantir a qualidade dos insumos e o tempo dedicado a cada paciente. Emitimos nota fiscal para reembolso, caso seu plano ofereça essa modalidade."
  },
  {
    question: "É seguro fazer procedimentos estéticos?",
    answer: "Absolutamente, quando realizados por profissionais qualificados em ambiente adequado. Nossa clínica segue rigorosamente as normas da ANVISA e utiliza apenas produtos com registro e selo de autenticidade."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Mariana Costa",
    treatment: "Harmonização Facial",
    text: "Fiquei impressionada com a naturalidade. Tinha medo de ficar com 'cara de boneca', mas a Dra. Juliana respeitou meus traços. Minha autoestima renovou!",
    rating: 5
  },
  {
    id: "t2",
    name: "Fernanda Lima",
    treatment: "Ultraformer e Bioestimulador",
    text: "O ambiente da clínica é acolhedor e a equipe muito técnica. Explicaram tudo antes de fazer. Sinto meu rosto muito mais firme.",
    rating: 5
  },
  {
    id: "t3",
    name: "Roberto Souza",
    treatment: "Toxina Botulínica",
    text: "Rápido, prático e eficaz. Faço meu botox preventivo há 2 anos na Lumina e não troco. Profissionais de extrema confiança.",
    rating: 5
  },
  {
    id: "t4",
    name: "Beatriz Silva",
    treatment: "Lavieen e Protocolo de Manchas",
    text: "Minha pele nunca teve tanto viço. O Lavieen realmente entrega aquele efeito 'BB Glow' prometido. A equipe foi super atenciosa no pós-procedimento.",
    rating: 5
  },
  {
    id: "t5",
    name: "Carla Dias",
    treatment: "Preenchimento Labial",
    text: "Amei o resultado! Ficou super natural, apenas realçou o contorno que eu tinha perdido. A Dra. Juliana tem mãos de fada.",
    rating: 5
  },
  {
    id: "t6",
    name: "Patrícia Gomes",
    treatment: "Morpheus 8",
    text: "Fiz para cicatrizes de acne e a melhora na textura foi visível já na primeira sessão. O ambiente da clínica te deixa muito segura.",
    rating: 5
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: "ba1",
    treatment: "Harmonização Facial",
    description: "Definição de mandíbula e mento",
    beforeImage: "https://cdn.pixabay.com/photo/2016/09/02/22/40/man-1640460_640.jpg", 
    afterImage: "https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761_640.jpg"
  },
  {
    id: "ba2",
    treatment: "Preenchimento Labial",
    description: "Hidratação e volume natural",
    beforeImage: "https://cdn.pixabay.com/photo/2016/11/29/03/35/girl-1867092_640.jpg",
    afterImage: "https://cdn.pixabay.com/photo/2017/03/30/18/17/girl-2189247_640.jpg"
  },
  {
    id: "ba3",
    treatment: "Bioestimulador",
    description: "Firmeza e melhora da textura",
    beforeImage: "https://cdn.pixabay.com/photo/2019/11/06/05/57/woman-4605248_640.jpg",
    afterImage: "https://cdn.pixabay.com/photo/2016/02/19/11/49/model-1209985_640.jpg"
  },
  {
    id: "ba4",
    treatment: "Tratamento de Pele",
    description: "Redução de manchas e poros",
    beforeImage: "https://cdn.pixabay.com/photo/2016/11/29/03/52/man-1867175_640.jpg",
    afterImage: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_640.jpg"
  }
];