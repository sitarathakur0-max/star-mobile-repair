export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'diagnosis'
  | 'screen-repair'
  | 'battery-replacement'
  | 'charging-port-repair'
  | 'software-system'
  | 'water-damage'
  | 'other-repairs'
  | 'repair-process'
  | 'why-choose-us'
  | 'reviews'
  | 'faq'
  | 'gallery'
  | 'contact';

export interface ServiceItem {
  id: PageId;
  title: string;
  shortDesc: string;
  icon: string;
  category: 'hardware' | 'power' | 'display' | 'software' | 'diagnostic';
  symptoms: string[];
  assessmentPoints: string[];
  description: string;
  warningNote?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'services' | 'location' | 'contact';
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyDetails: string[];
}
