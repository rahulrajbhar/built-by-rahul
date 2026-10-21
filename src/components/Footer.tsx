import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E4E6E8] py-10 bg-[#FAFAF8]">
      <div className="max-w-[1080px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-['JetBrains_Mono',monospace] text-[12px] text-[#8A8F98]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0E8F6B]" />
          <span>Built by Rahul — AI-assisted web development</span>
        </div>

        <div className="flex items-center gap-6">
          <span>Updated 2026</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-[#16181D] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
