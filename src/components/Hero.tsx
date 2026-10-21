import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Terminal, Clock, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreSamples: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreSamples }) => {
  const [activeStage, setActiveStage] = useState<number>(3); // Default to v1.0 Ship

  const stages = [
    {
      version: 'v0.1',
      title: 'Brief',
      desc: 'Tell me what your business needs.',
      fullDetail:
        'A concise 20-minute discovery call or async brief. We define your primary call-to-action, target audience, brand aesthetic, and core conversion goals.',
      duration: 'Day 1',
      status: 'done',
    },
    {
      version: 'v0.2',
      title: 'Draft',
      desc: 'AI-assisted first build, usually within days.',
      fullDetail:
        'I direct modern generative AI coding tools to assemble a fully interactive, production-quality functional prototype rather than static wireframes.',
      duration: 'Days 2–3',
      status: 'done',
    },
    {
      version: 'v0.3',
      title: 'Refine',
      desc: "We revise together until it's right.",
      fullDetail:
        'Collaborative feedback loops. We polish typography, mobile breakpoints, conversion micro-copy, and layout spacing until it exceeds expectations.',
      duration: 'Days 4–5',
      status: 'done',
    },
    {
      version: 'v1.0',
      title: 'Ship',
      desc: 'Live, and yours.',
      fullDetail:
        'Deployment to custom domain, CDN caching, performance auditing (95+ Lighthouse score), and complete source code handoff with no monthly vendor lock-in.',
      duration: 'Day 7',
      status: 'active',
    },
  ];

  return (
    <section id="hero" className="pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="max-w-[1080px] mx-auto px-6">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 text-[12.5px] font-['JetBrains_Mono',monospace] tracking-wider uppercase text-[#0A6E53] font-semibold mb-5">
          <span className="w-5 h-[2px] bg-[#FF6B4A]" />
          <span>AI-ASSISTED WEB DEVELOPMENT</span>
        </div>

        {/* Main H1 */}
        <h1 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[40px] sm:text-[54px] md:text-[68px] lg:text-[74px] leading-[1.04] tracking-[-0.02em] max-w-[16ch] text-[#16181D] mb-6">
          Websites, shipped <span className="text-[#0E8F6B]">in days.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[17px] sm:text-[19px] text-[#565C68] max-w-[54ch] leading-relaxed mb-10">
          I design and build clean, fast websites for small businesses and solo founders — using modern AI tools, directed by 13+ years of turning real business requirements into things that actually work.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3.5 mb-16">
          <button
            onClick={onStartProject}
            className="font-['Inter',sans-serif] font-semibold text-[15px] bg-[#FF6B4A] hover:bg-[#E5502F] text-white px-7 py-3.5 rounded-full transition-all duration-200 flex items-center gap-2 shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreSamples}
            className="font-['Inter',sans-serif] font-semibold text-[15px] bg-transparent text-[#16181D] hover:border-[#16181D] border-[1.5px] border-[#E4E6E8] px-6 py-3.5 rounded-full transition-all duration-200 flex items-center gap-2 cursor-pointer hover:bg-[#FFFFFF]"
          >
            <Sparkles className="w-4 h-4 text-[#0E8F6B]" />
            <span>See live samples</span>
          </button>
        </div>

        {/* Interactive Build Log Section */}
        <div className="bg-[#FFFFFF] border border-[#E4E6E8] rounded-2xl p-6 sm:p-8 max-w-[700px] shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-[#E4E6E8]">
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono',monospace] text-[#565C68] uppercase tracking-wider font-semibold">
              <Terminal className="w-3.5 h-3.5 text-[#0E8F6B]" />
              <span>Execution Pipeline · Click phase to inspect</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-['JetBrains_Mono',monospace] text-[#0A6E53] font-medium bg-[#0E8F6B]/10 px-2.5 py-1 rounded-full">
              <Clock className="w-3 h-3" />
              <span>Standard 1-week sprint</span>
            </div>
          </div>

          <div className="relative pl-6 before:content-[''] before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[#E4E6E8]">
            {stages.map((stage, idx) => {
              const isSelected = activeStage === idx;
              const isDone = stage.status === 'done';
              return (
                <div
                  key={stage.version}
                  onClick={() => setActiveStage(idx)}
                  className={`relative flex items-start gap-5 py-3 rounded-xl transition-all cursor-pointer ${
                    isSelected ? 'bg-[#FAFAF8] px-3 -ml-3' : 'hover:bg-[#FAFAF8]/50 px-3 -ml-3'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="w-6 shrink-0 flex justify-center pt-1 relative z-10">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-[2.5px] transition-colors flex items-center justify-center ${
                        isDone
                          ? 'bg-[#0E8F6B] border-[#0E8F6B]'
                          : 'bg-[#FAFAF8] border-[#FF6B4A]'
                      }`}
                    >
                      {isDone && <Check className="w-2 h-2 text-white stroke-[3]" />}
                    </div>
                  </div>

                  {/* Stage Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-['JetBrains_Mono',monospace] text-[12px] font-medium text-[#0A6E53]">
                        {stage.version}
                      </span>
                      <span className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[16px] text-[#16181D]">
                        {stage.title}
                      </span>
                      {stage.status === 'active' && (
                        <span className="inline-block w-1.5 h-3.5 bg-[#FF6B4A] ml-0.5 animate-blink" />
                      )}
                    </div>
                    <p className="text-[14px] text-[#565C68]">{stage.desc}</p>

                    {/* Expanded Inspector on Click */}
                    {isSelected && (
                      <div className="mt-2.5 pt-2.5 border-t border-[#E4E6E8]/70 text-[13px] text-[#565C68] leading-relaxed animate-rise">
                        <div className="flex items-center gap-1.5 text-[#0E8F6B] font-medium mb-1">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>BA Execution Standard ({stage.duration}):</span>
                        </div>
                        <p>{stage.fullDetail}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
