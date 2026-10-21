import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Check, Copy, Sparkles } from 'lucide-react';
import { ProjectInquiry } from '../types';

interface ContactSectionProps {
  selectedTier: string;
  onSelectTier: (tier: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedTier, onSelectTier }) => {
  const [formData, setFormData] = useState<ProjectInquiry>({
    name: '',
    email: '',
    projectType: 'Landing Page',
    selectedTier: selectedTier || 'standard',
    timeline: 'Within 2 weeks',
    details: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync external selectedTier changes into form state
  React.useEffect(() => {
    if (selectedTier) {
      setFormData((prev) => ({ ...prev, selectedTier }));
    }
  }, [selectedTier]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const constructEmailBody = () => {
    return encodeURIComponent(
      `Hi Rahul,\n\nI'm interested in building a website with you.\n\nProject Type: ${formData.projectType}\nSelected Tier: ${formData.selectedTier.toUpperCase()}\nDesired Timeline: ${formData.timeline}\nClient Name: ${formData.name || 'Not provided'}\nClient Email: ${formData.email || 'Not provided'}\n\nProject Details:\n${formData.details || 'Let’s discuss requirements.'}\n\nLooking forward to speaking with you!`
    );
  };

  const mailtoUrl = `mailto:rahulsrajbhar@gmail.com?subject=${encodeURIComponent(
    `Website Project Inquiry: ${formData.projectType} (${formData.name || 'New Client'})`
  )}&body=${constructEmailBody()}`;

  const whatsappMessage = encodeURIComponent(
    `Hi Rahul! I saw your portfolio and would like to discuss a website project (${formData.projectType}, ${formData.selectedTier.toUpperCase()} tier). Details: ${formData.details || 'Let’s connect!'}`
  );
  const whatsappUrl = `https://wa.me/919833756906?text=${whatsappMessage}`;

  const handleCopySummary = () => {
    const text = `Project: ${formData.projectType} (${formData.selectedTier.toUpperCase()})\nTimeline: ${formData.timeline}\nClient: ${formData.name} <${formData.email}>\nNotes: ${formData.details}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 md:py-24 border-t border-[#E4E6E8]">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="font-['JetBrains_Mono',monospace] text-[12.5px] tracking-wider uppercase text-[#E5502F] font-semibold mb-3.5">
          08 — Contact
        </div>
        <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[36px] sm:text-[48px] md:text-[54px] tracking-[-0.01em] text-[#16181D] mb-4">
          Have a project in mind?
        </h2>
        <p className="text-[17px] text-[#565C68] max-w-[50ch] mb-10 leading-relaxed">
          Tell me a bit about your business and what you need. I'll reply with honest requirements and a clear scope within 24 hours.
        </p>

        {/* Quick direct communication buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-14">
          <a
            href={mailtoUrl}
            className="font-semibold text-[15px] bg-[#FF6B4A] hover:bg-[#E5502F] text-white px-6 py-3.5 rounded-full transition-all flex items-center gap-2 shadow-xs hover:shadow-md cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Email me directly →</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[15px] bg-[#FAFAF8] text-[#16181D] hover:text-[#0E8F6B] border border-[#E4E6E8] hover:border-[#0E8F6B] px-6 py-3.5 rounded-full transition-all flex items-center gap-2 cursor-pointer hover:bg-white"
          >
            <MessageCircle className="w-4 h-4 text-[#0E8F6B]" />
            <span>Message on WhatsApp</span>
          </a>
        </div>

        {/* Interactive Scope & Inquiry Form */}
        <div className="bg-[#FFFFFF] border border-[#E4E6E8] rounded-2xl p-6 sm:p-9 max-w-[760px] shadow-xs">
          <div className="flex items-center gap-2 font-['Bricolage_Grotesque',sans-serif] font-bold text-xl text-[#16181D] mb-6">
            <Sparkles className="w-5 h-5 text-[#0E8F6B]" />
            <span>Draft your project inquiry</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#565C68] font-['JetBrains_Mono',monospace] mb-2"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Maya Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#E4E6E8] bg-[#FAFAF8] text-[#16181D] placeholder:text-[#8A8F98] focus:bg-white focus:border-[#0E8F6B] focus:outline-hidden transition-all text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#565C68] font-['JetBrains_Mono',monospace] mb-2"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@business.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#E4E6E8] bg-[#FAFAF8] text-[#16181D] placeholder:text-[#8A8F98] focus:bg-white focus:border-[#0E8F6B] focus:outline-hidden transition-all text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Project Type */}
              <div>
                <label
                  htmlFor="contact-type"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#565C68] font-['JetBrains_Mono',monospace] mb-2"
                >
                  Project Type
                </label>
                <select
                  id="contact-type"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#E4E6E8] bg-[#FAFAF8] text-[#16181D] focus:bg-white focus:border-[#0E8F6B] focus:outline-hidden transition-all text-sm"
                >
                  <option value="Landing Page">Landing Page (Single conversion page)</option>
                  <option value="Small Business Site">Small Business Site (Multi-section)</option>
                  <option value="Portfolio Site">Portfolio Site (Creator / Consultant)</option>
                  <option value="Website Refresh">Website Refresh (Modernize existing)</option>
                  <option value="Custom Web App">Custom Web App / Integration</option>
                </select>
              </div>

              {/* Pricing Tier */}
              <div>
                <label
                  htmlFor="contact-tier"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#565C68] font-['JetBrains_Mono',monospace] mb-2"
                >
                  Target Package
                </label>
                <select
                  id="contact-tier"
                  name="selectedTier"
                  value={formData.selectedTier}
                  onChange={(e) => {
                    handleChange(e);
                    onSelectTier(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-[#E4E6E8] bg-[#FAFAF8] text-[#16181D] focus:bg-white focus:border-[#0E8F6B] focus:outline-hidden transition-all text-sm"
                >
                  <option value="starter">Starter — ₹11,999 (~1 week)</option>
                  <option value="standard">Standard — ₹24,999 (~2 weeks, most popular)</option>
                  <option value="custom">Custom — Scoped together</option>
                </select>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label
                htmlFor="contact-timeline"
                className="block text-xs font-semibold uppercase tracking-wider text-[#565C68] font-['JetBrains_Mono',monospace] mb-2"
              >
                Desired Launch Timeline
              </label>
              <select
                id="contact-timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#E4E6E8] bg-[#FAFAF8] text-[#16181D] focus:bg-white focus:border-[#0E8F6B] focus:outline-hidden transition-all text-sm"
              >
                <option value="Immediate / Rush (Next 3–5 days)">Immediate / Rush (Next 3–5 days)</option>
                <option value="Within 2 weeks">Within 2 weeks (Standard)</option>
                <option value="Within a month">Within a month</option>
                <option value="Flexible / Exploring ideas">Flexible / Exploring ideas</option>
              </select>
            </div>

            {/* Details */}
            <div>
              <label
                htmlFor="contact-details"
                className="block text-xs font-semibold uppercase tracking-wider text-[#565C68] font-['JetBrains_Mono',monospace] mb-2"
              >
                Tell me about your business & goals
              </label>
              <textarea
                id="contact-details"
                name="details"
                rows={4}
                placeholder="What does your business do, who are your customers, and what do you want visitors to do on the site? (Any reference sites you love?)"
                value={formData.details}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#E4E6E8] bg-[#FAFAF8] text-[#16181D] placeholder:text-[#8A8F98] focus:bg-white focus:border-[#0E8F6B] focus:outline-hidden transition-all text-sm leading-relaxed"
              />
            </div>

            {/* Submit & Secondary Copy Options */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                className="font-['Inter',sans-serif] font-semibold text-[14.5px] bg-[#16181D] hover:bg-[#0E8F6B] text-white px-7 py-3.5 rounded-full transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Open Email Client</span>
              </button>

              <button
                type="button"
                onClick={handleCopySummary}
                className="font-medium text-xs text-[#565C68] hover:text-[#16181D] flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#E4E6E8] bg-[#FAFAF8] cursor-pointer transition-colors"
                title="Copy inquiry summary to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#0E8F6B]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Summary copied!' : 'Copy summary'}</span>
              </button>
            </div>

            {submitted && (
              <div className="p-3 bg-[#0E8F6B]/10 border border-[#0E8F6B]/30 rounded-xl text-xs text-[#0A6E53] font-medium animate-rise">
                ✓ Opening your email client with your prefilled project brief. If it didn't open automatically, write directly to <a href="mailto:rahulsrajbhar@gmail.com" className="underline font-bold">rahulsrajbhar@gmail.com</a>.
              </div>
            )}
          </form>
        </div>

        {/* Location & availability note */}
        <div className="mt-8 text-sm text-[#8A8F98] font-['JetBrains_Mono',monospace]">
          rahulsrajbhar@gmail.com · Mumbai, India · Remote-friendly global clients
        </div>
      </div>
    </section>
  );
};
