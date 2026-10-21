import { SampleProject, ServiceOffering, ProcessStep, WhyReason, PricingPlan, FaqItem } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'Brief',
    desc: "A short call or written brief: what you do, who it's for, what the site needs to accomplish.",
  },
  {
    num: '02',
    title: 'Draft',
    desc: 'I use modern AI tools — directed by 13+ years of business analysis — to move from brief to a real, working first draft, fast.',
  },
  {
    num: '03',
    title: 'Refine',
    desc: 'We go back and forth together until the site actually feels right, not just "done."',
  },
  {
    num: '04',
    title: 'Ship',
    desc: 'You get a live site, clean source files, and a plain-English handoff with zero lock-in.',
  },
];

export const WHY_REASONS: WhyReason[] = [
  {
    title: 'Faster turnaround',
    desc: 'Days, not months, from initial brief to live high-converting site.',
  },
  {
    title: 'Lower cost',
    desc: 'No agency overhead or account manager bloat — you pay directly for the work, not the office.',
  },
  {
    title: 'Requirements-first',
    desc: '13+ years of enterprise BA discipline behind every single layout decision.',
  },
  {
    title: 'Personal attention',
    desc: 'One senior specialist, directly accountable — never handed off to junior interns.',
  },
];

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: 'landing',
    sampleRef: 'sample-landing',
    tag: 'Sample 01',
    title: 'Landing Pages',
    desc: 'One clean page that tells visitors who you are, builds instant authority, and drives next steps.',
    iconName: 'Layout',
  },
  {
    id: 'smallbiz',
    sampleRef: 'sample-smallbiz',
    tag: 'Sample 02',
    title: 'Small Business Sites',
    desc: 'Home, about, services, portfolio, and contact — everything a growing business needs to build trust.',
    iconName: 'Building2',
  },
  {
    id: 'portfolio',
    sampleRef: 'sample-portfolio',
    tag: 'Sample 03',
    title: 'Portfolio Sites',
    desc: 'For consultants, advisors, freelancers, and creators who need their site to look as polished as their work.',
    iconName: 'Briefcase',
  },
  {
    id: 'refresh',
    sampleRef: 'sample-refresh',
    tag: 'Sample 04',
    title: 'Website Refresh',
    desc: 'A dated site, rebuilt clean. Same core brand and SEO value, with modern speed and mobile delight.',
    iconName: 'RefreshCw',
  },
];

export const SAMPLE_PROJECTS: SampleProject[] = [
  {
    id: 'sample-landing',
    category: 'landing',
    tag: 'Sample 01 — Landing Page',
    title: 'Aura Wellness & Sauna Studio',
    subtitle: 'Boutique Contrast Therapy Suite',
    description:
      'A single, focused conversion page for a boutique contrast therapy suite — service benefits, tiered session passes, customer reviews, and an interactive 30-second suite reservation picker. Built to turn local interest into direct bookings without distraction.',
    pills: ['⚡ Single-Page Conversion', '📅 Interactive Time Slot Picker', '⏱ ~1 Week Build'],
    sampleUrl: '/sample-landing-page.html',
    previewBg: 'linear-gradient(150deg, #183327, #2e6b52)',
    previewInnerBg: '#FAF9F6',
    previewInnerColor: '#18191a',
    brandName: 'Aura Wellness & Sauna Studio',
    brandColor: '#2e6b52',
    previewTag: 'Sample 01 · Landing Page',
    previewTagColor: '#8a8d93',
    ctaText: 'Reserve Suite →',
    ctaBg: '#2e6b52',
    ctaColor: '#ffffff',
    features: [
      'High-converting single-page layout',
      'Interactive 30-second reservation slot selector',
      'Tiered single & bundle session pass pricing',
      'Real customer social proof & location badge',
    ],
  },
  {
    id: 'sample-smallbiz',
    category: 'smallbiz',
    tag: 'Sample 02 — Small Business Site',
    title: 'Vanguard Design & Build',
    subtitle: 'Architectural Studio & Turnkey Contractor',
    description:
      'A complete multi-section website for an architectural studio and turnkey contractor — Home, About Us, Capabilities, Filtered Projects Portfolio, Instant Construction Cost Calculator, and Consultation Inquiry Form. Everything a growing business needs to build immediate trust.',
    pills: ['🏢 5 Complete Sections', '🧮 Live BOQ Cost Estimator', '🖼 Filterable Portfolio'],
    sampleUrl: '/sample-small-business.html',
    previewBg: 'linear-gradient(150deg, #1b2a3a, #344f6d)',
    previewInnerBg: '#FBFBFA',
    previewInnerColor: '#191b1d',
    brandName: 'Vanguard Design & Build',
    brandColor: '#1b2a3a',
    previewTag: 'Sample 02 · Small Business Site',
    previewTagColor: '#c1693c',
    ctaText: 'Project Estimator →',
    ctaBg: '#c1693c',
    ctaColor: '#ffffff',
    features: [
      'Multi-section business architecture (Home, About, Services, Projects, Contact)',
      'Live interactive square-footage cost calculator',
      'Categorized architectural portfolio with modal inspection',
      'Client inquiry and RFP submission form',
    ],
  },
  {
    id: 'sample-portfolio',
    category: 'portfolio',
    tag: 'Sample 03 — Portfolio Site',
    title: 'Devon Vance — Fractional CPO',
    subtitle: 'High-Authority Advisory Portfolio',
    description:
      'An editorial, high-authority portfolio for senior consultants and creators — clear positioning statement, quantified case studies (+42% retention, $140M value), 3 fixed advisory sprint tiers, and direct consultation scheduler. Designed to look as polished as the executive work itself.',
    pills: ['🎯 Quantified Case Studies', '📦 Packaged Advisory Sprints', '✨ Modern Dark Theme'],
    sampleUrl: '/sample-portfolio.html',
    previewBg: 'linear-gradient(150deg, #090a0d, #1a2233)',
    previewInnerBg: '#161920',
    previewInnerColor: '#f0f2f5',
    previewBorder: '#232833',
    brandName: 'Devon Vance · Product Advisor',
    brandColor: '#4f8cff',
    previewTag: 'Sample 03 · Portfolio Site',
    previewTagColor: '#626875',
    ctaText: 'Book 20-Min Intro →',
    ctaBg: '#ffffff',
    ctaColor: '#000000',
    features: [
      'Executive editorial layout with dark mode aesthetics',
      'Measurable impact metric cards and client testimonials',
      'Product strategy sprint packages with deliverables checklist',
      'Direct intro consultation booking integration',
    ],
  },
  {
    id: 'sample-refresh',
    category: 'refresh',
    tag: 'Sample 04 — Website Refresh',
    title: 'Heritage Precision Auto Repairs',
    subtitle: 'From Clunky 2012 to Sleek 2026',
    description:
      'A dated 2012 workshop website modernized with an interactive Before / After layout comparison toggle, Google PageSpeed score jump (31 to 99/100), and mobile appointment booking. Same trusted content and SEO, with a clean, lightning-fast rebuild.',
    pills: ['⚖️ Live Before/After Switcher', '🚀 0.3s Load Time (99/100)', '📱 100% Mobile Fluid'],
    sampleUrl: '/sample-website-refresh.html',
    previewBg: 'linear-gradient(150deg, #0f172a, #1e3a8a)',
    previewInnerBg: '#FFFFFF',
    previewInnerColor: '#0f172a',
    brandName: 'Heritage Auto — Rebuilt Clean',
    brandColor: '#1e3a8a',
    previewTag: 'Sample 04 · Website Refresh',
    previewTagColor: '#16a34a',
    ctaText: 'Live 2012 vs 2026 Toggle →',
    ctaBg: '#1e3a8a',
    ctaColor: '#ffffff',
    features: [
      'Interactive side-by-side Before / After version toggle',
      'Lighthouse 99/100 performance score compliance',
      'Digital service booking & diagnostic scheduling form',
      'Preserved local search engine rankings & legacy credibility',
    ],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    tier: 'Starter',
    price: '₹11,999',
    priceNum: 11999,
    timeline: '~1 week turnaround',
    features: [
      'Single page conversion focus',
      '100% mobile-friendly & fluid',
      '2 rounds of collaborative revisions',
      'Direct contact & lead capture form',
      'Blazing fast performance & asset optimization',
      'Plain-English source handoff',
    ],
  },
  {
    id: 'standard',
    tier: 'Standard',
    featuredTag: 'Standard — Most common',
    price: '₹24,999',
    priceNum: 24999,
    timeline: '~2 weeks turnaround',
    isFeatured: true,
    features: [
      'Up to 5 custom-designed pages/sections',
      'Lead capture form + on-page SEO meta',
      '3 rounds of detailed revisions',
      '1 month of post-launch tweaks included',
      'Interactive features (calculators, tabs, pickers)',
      'Custom domain & hosting setup assistance',
    ],
  },
  {
    id: 'custom',
    tier: 'Custom',
    price: "Let's talk",
    timeline: 'Scoped together',
    features: [
      'Multi-page or complex business sites',
      'Custom API or database integrations',
      'Full brand design system & custom components',
      'Ongoing maintenance & retainer options',
      'Tailored business logic & custom workflows',
      'Priority turnaround & dedicated sprint planning',
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Will an AI-built site feel generic?',
    answer:
      'No. AI handles the heavy lifting on code boilerplate, scaffolding, and asset generation. Every structural decision, every line of copy, and every round of user feedback is personally directed by me, tailored specifically for your target audience. Nothing goes live unreviewed.',
  },
  {
    id: 'faq-2',
    question: 'How fast is "fast"?',
    answer:
      'Most single-page landing sites take about 5–7 days from initial brief to launch. Multi-page sites take about two to three weeks, depending on revision speed and content readiness.',
  },
  {
    id: 'faq-3',
    question: 'Do you offer support after launch?',
    answer:
      'Yes. Standard builds include 1 month of complimentary post-launch tweaks. Beyond that, I can handle minor updates on request, or provide full documentation and source code so you or your team can manage it with zero vendor lock-in.',
  },
  {
    id: 'faq-4',
    question: 'Is this your full-time work?',
    answer:
      "By day, I work as a Senior Business Analyst leading enterprise digital transformations. I take on a limited number of curated client projects at a time so each one gets genuine focus and senior-level delivery.",
  },
  {
    id: 'faq-5',
    question: 'What do I need to provide to get started?',
    answer:
      'A brief description of what your business does, who your ideal customers are, any logo or brand colors you like, and your main call to action. Even rough bullet points or a voice note are plenty to begin.',
  },
];
