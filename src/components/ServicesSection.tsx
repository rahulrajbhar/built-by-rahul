import React from 'react';
import { ArrowRight, Layout, Building2, Briefcase, RefreshCw } from 'lucide-react';
import { SERVICE_OFFERINGS } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectSampleCategory: (catId: 'landing' | 'smallbiz' | 'portfolio' | 'refresh') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectSampleCategory }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#0E8F6B]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#c1693c]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#4f8cff]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-[#1e3a8a]" />;
      default:
        return <Layout className="w-5 h-5 text-[#0E8F6B]" />;
    }
  };

  return (
    <section id="build" className="py-20 md:py-24 border-t border-[#E4E6E8]">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="font-['JetBrains_Mono',monospace] text-[12.5px] tracking-wider uppercase text-[#E5502F] font-semibold mb-3.5">
          03 — What I Build
        </div>
        <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[32px] sm:text-[40px] tracking-[-0.01em] text-[#16181D] mb-4">
          Sites built for small business
        </h2>
        <p className="text-[17px] text-[#565C68] max-w-[58ch] mb-12">
          If it's not listed here, ask — most projects fit somewhere close.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SERVICE_OFFERINGS.map((svc) => (
            <button
              key={svc.id}
              type="button"
              onClick={() => {
                onSelectSampleCategory(svc.id as any);
                const el = document.getElementById('sample');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group text-left bg-[#FFFFFF] border border-[#E4E6E8] hover:border-[#0E8F6B] rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['JetBrains_Mono',monospace] text-[11px] font-bold tracking-wider uppercase text-[#E5502F]">
                    {svc.tag}
                  </span>
                  <div className="p-2 rounded-lg bg-[#FAFAF8] group-hover:bg-[#FAFAF8]/90 transition-colors">
                    {getIcon(svc.iconName)}
                  </div>
                </div>
                <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[21px] text-[#16181D] mb-2 group-hover:text-[#0E8F6B] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-[14.5px] text-[#565C68] leading-relaxed mb-6">
                  {svc.desc}
                </p>
              </div>

              <div className="text-[13.5px] font-semibold text-[#0A6E53] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                <span>See live sample</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
