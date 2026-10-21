import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="how" className="py-20 md:py-24 border-t border-[#E4E6E8]">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="font-['JetBrains_Mono',monospace] text-[12.5px] tracking-wider uppercase text-[#E5502F] font-semibold mb-3.5">
          01 — Process
        </div>
        <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[32px] sm:text-[40px] tracking-[-0.01em] text-[#16181D] mb-4 max-w-[18ch]">
          How it works
        </h2>
        <p className="text-[17px] text-[#565C68] max-w-[58ch] mb-12">
          Four clear steps, zero black boxes. Direct communication from start to launch.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.num}
              className="bg-[#FFFFFF] border border-[#E4E6E8] rounded-xl p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#0E8F6B]/60 hover:shadow-sm"
            >
              <div className="font-['JetBrains_Mono',monospace] text-[13px] font-bold text-[#8A8F98] mb-3.5">
                {step.num}
              </div>
              <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[20px] text-[#16181D] mb-2.5">
                {step.title}
              </h3>
              <p className="text-[14.5px] text-[#565C68] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
