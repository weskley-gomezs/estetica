export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  registration: string; // CRM/CRBM
  bio: string;
  specialties: string[];
}

export interface Treatment {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string; // Para quem é indicado
  benefits: string[];
  process: string; // Como funciona
  duration: string;
  prePostCare: string;
  contraindications: string;
  expectedResults: string;
  image: string;
}

export interface Technology {
  id: string;
  name: string;
  function: string; // Para que serve
  benefits: string[];
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BeforeAfterItem {
  id: string;
  treatment: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}