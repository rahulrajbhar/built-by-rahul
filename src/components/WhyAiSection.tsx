import React from 'react';
import { Plus } from 'lucide-react';
import { WHY_REASONS } from '../data/portfolioData';

export const WhyAiSection: React.FC = () => {
  return (
    <section id="why" className="py-20 md:py-24 border-t border-[#E4E6E8]">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="font-['JetBrains_Mono',monospace] text-[12.5px] tracking-wider uppercase text-[#E5502F] font-semibold mb-3.5">
          02 — Why AI-Assisted
        </div>
        <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[32px] sm:text-[40px] tracking-[-0.01em] text-[#16181D] mb-12">
          Why AI-assisted development?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Narrative */}
          <div className="text-[16.5px] text-[#565C68] space-y-4 max-w-[50ch] leading-relaxed">
            <p>
              Because the tools are genuinely powerful now — and directing them with precision is a craft in itself.
            </p>
            <p>
              My background is <strong className="text-[#16181D] font-semibold">Senior Business Analyst</strong> work: translating complex business requirements into working enterprise systems for global clients. Building your site with AI tools doesn't skip that discipline.
            </p>
            <p>
              It means you get a real, working website faster and at a fraction of traditional agency overhead — without cutting corners on what actually matters: does it accomplish what your business needs it to do.
            </p>
          </div>

          {/* Right Why List */}
          <div className="flex flex-col">
            {WHY_REASONS.map((item, idx) => (
              <div
                key={item.title}
                className={`py-4.5 flex gap-4 items-start border-t border-[#E4E6E8] ${
                  idx === WHY_REASONS.length - 1 ? 'border-b' : ''
                }`}
              >
                <div className="w-5.5 h-5.5 rounded-full bg-[#0E8F6B]/12 text-[#0A6E53] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  <Plus className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="block text-[15.5px] text-[#16181D] font-semibold mb-0.5">
                    {item.title}
                  </strong>
                  <span className="text-[14px] text-[#565C68]">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
