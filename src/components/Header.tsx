import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onStartProject: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onStartProject }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How it works', href: '#how' },
    { label: 'What I build', href: '#build' },
    { label: 'Sample Work', href: '#sample' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#FAFAF8]/95 backdrop-blur-md border-[#E4E6E8] shadow-xs'
          : 'bg-[#FAFAF8]/90 backdrop-blur-sm border-[#E4E6E8]'
      }`}
    >
      <div className="max-w-[1080px] mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[19px] tracking-tight flex items-center gap-2.5 text-[#16181D] hover:opacity-90 transition-opacity"
          aria-label="Built by Rahul Home"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#0E8F6B] inline-block animate-pulse" />
          <span>Built by Rahul</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-[14.5px] font-medium text-[#565C68]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#16181D] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#0E8F6B]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onStartProject}
            className="font-['Inter',sans-serif] font-semibold text-[14px] bg-[#16181D] hover:bg-[#0A6E53] text-white px-5 py-2.5 rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-xs hover:shadow-sm cursor-pointer"
          >
            <span>Start a project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#16181D] hover:bg-[#E4E6E8]/40 transition-colors"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E4E6E8] bg-[#FAFAF8] px-6 py-5 shadow-lg animate-rise">
          <nav className="flex flex-col gap-3.5 text-[15px] font-medium text-[#565C68]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#16181D] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E4E6E8]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartProject();
                }}
                className="w-full justify-center font-semibold text-[14.5px] bg-[#FF6B4A] hover:bg-[#E5502F] text-white px-5 py-3 rounded-full transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start a project →</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
