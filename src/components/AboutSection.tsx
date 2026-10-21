import React from 'react';
import { Award, Briefcase, Zap, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 border-t border-[#E4E6E8]">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="font-['JetBrains_Mono',monospace] text-[12.5px] tracking-wider uppercase text-[#E5502F] font-semibold mb-3.5">
          06 — About
        </div>
        <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[32px] sm:text-[40px] tracking-[-0.01em] text-[#16181D] mb-12">
          Who's building it
        </h2>

        <div className="flex flex-col sm:flex-row gap-8 md:gap-12 items-start">
          {/* Avatar Image */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border-2 border-[#0E8F6B]/30 shadow-md">
            <img
              src="/avatar.png"
              alt="Rahul Rajbhar"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback styling if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Bio text */}
          <div className="flex-1 text-[16.5px] text-[#565C68] space-y-4 max-w-[62ch] leading-relaxed">
            <p>
              I'm Rahul. By day, I'm a <strong className="text-[#16181D] font-semibold">Senior Business Analyst</strong> with 13+ years implementing SaaS platforms for global enterprise clients — gathering requirements, aligning cross-functional teams, and owning end-to-end delivery through to go-live.
            </p>
            <p>
              This studio is where I bring that exact same requirements-first discipline to smaller, faster builds: real websites, for real businesses, constructed with modern AI-assisted workflows.
            </p>
            <p>
              I take on a strictly limited number of projects at any given time, ensuring every client works directly with me and receives senior-level attention.
            </p>

            {/* Credibility highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-[#FFFFFF] border border-[#E4E6E8] p-3.5 rounded-xl">
                <div className="text-[12px] font-['JetBrains_Mono',monospace] text-[#8A8F98] uppercase">Experience</div>
                <div className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#16181D]">13+ Years</div>
                <div className="text-xs text-[#565C68]">SaaS & BA Delivery</div>
              </div>

              <div className="bg-[#FFFFFF] border border-[#E4E6E8] p-3.5 rounded-xl">
                <div className="text-[12px] font-['JetBrains_Mono',monospace] text-[#8A8F98] uppercase">Speed</div>
                <div className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#0E8F6B]">Days, Not Months</div>
                <div className="text-xs text-[#565C68]">AI-assisted builds</div>
              </div>

              <div className="bg-[#FFFFFF] border border-[#E4E6E8] p-3.5 rounded-xl col-span-2 sm:col-span-1">
                <div className="text-[12px] font-['JetBrains_Mono',monospace] text-[#8A8F98] uppercase">Ownership</div>
                <div className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#16181D]">Zero Lock-in</div>
                <div className="text-xs text-[#565C68]">100% your code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
