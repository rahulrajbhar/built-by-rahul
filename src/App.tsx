import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProcessSection } from './components/ProcessSection';
import { WhyAiSection } from './components/WhyAiSection';
import { ServicesSection } from './components/ServicesSection';
import { SampleWorkSection } from './components/SampleWorkSection';
import { PricingSection } from './components/PricingSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SampleCategory } from './types';

export const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SampleCategory>('all');
  const [selectedTier, setSelectedTier] = useState<string>('standard');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSamples = () => {
    const el = document.getElementById('sample');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTier = (tier: string) => {
    setSelectedTier(tier);
    scrollToContact();
  };

  const handleSelectSampleCategory = (cat: SampleCategory) => {
    setSelectedCategory(cat);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#16181D]">
      {/* Top sticky navigation */}
      <Header onStartProject={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onStartProject={scrollToContact}
          onExploreSamples={scrollToSamples}
        />
        <ProcessSection />
        <WhyAiSection />
        <ServicesSection onSelectSampleCategory={handleSelectSampleCategory} />
        <SampleWorkSection
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectSampleCategory}
        />
        <PricingSection onSelectTier={handleSelectTier} />
        <AboutSection />
        <FaqSection />
        <ContactSection
          selectedTier={selectedTier}
          onSelectTier={setSelectedTier}
        />
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
};

export default App;
