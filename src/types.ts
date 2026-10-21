export type SampleCategory = 'all' | 'landing' | 'smallbiz' | 'portfolio' | 'refresh';

export interface SampleProject {
  id: string;
  category: 'landing' | 'smallbiz' | 'portfolio' | 'refresh';
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  pills: string[];
  sampleUrl: string;
  previewBg: string;
  previewInnerBg: string;
  previewInnerColor: string;
  previewBorder?: string;
  brandName: string;
  brandColor: string;
  previewTag: string;
  previewTagColor: string;
  ctaText: string;
  ctaBg: string;
  ctaColor: string;
  features: string[];
}

export interface ServiceOffering {
  id: string;
  sampleRef: string;
  tag: string;
  title: string;
  desc: string;
  iconName: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface WhyReason {
  title: string;
  desc: string;
}

export interface PricingPlan {
  id: string;
  tier: string;
  featuredTag?: string;
  price: string;
  priceNum?: number;
  timeline: string;
  features: string[];
  isFeatured?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProjectInquiry {
  name: string;
  email: string;
  projectType: string;
  selectedTier: string;
  timeline: string;
  details: string;
}
