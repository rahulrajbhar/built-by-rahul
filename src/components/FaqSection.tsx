import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/portfolioData';

export const FaqSection: React.FC = () => {
  // Allow all items to be open or toggleable
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': true,
    'faq-3': true,
    'faq-4': true,
    'faq-5': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="faq" className="py-20 md:py-24 border-t border-[#E4E6E8]">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="font-['JetBrains_Mono',monospace] text-[12.5px] tracking-wider uppercase text-[#E5502F] font-semibold mb-3.5">
          07 — FAQ
        </div>
        <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[32px] sm:text-[40px] tracking-[-0.01em] text-[#16181D] mb-12">
          Questions, answered
        </h2>

        <div className="max-w-[760px] divide-y divide-[#E4E6E8] border-y border-[#E4E6E8]">
          {FAQ_ITEMS.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div key={item.id} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group focus-visible:outline-2 focus-visible:outline-[#0E8F6B]"
                >
                  <span className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[18px] sm:text-[19px] text-[#16181D] group-hover:text-[#0E8F6B] transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAFAF8] border border-[#E4E6E8] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#16181D] text-white border-[#16181D]' : 'text-[#565C68]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-3.5 text-[15px] text-[#565C68] leading-relaxed max-w-[62ch] animate-rise">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
