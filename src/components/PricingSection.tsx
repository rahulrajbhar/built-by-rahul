import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/portfolioData';

interface PricingSectionProps {
  onSelectTier: (tierId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="py-20 md:py-24 border-t border-[#E4E6E8]">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="font-['JetBrains_Mono',monospace] text-[12.5px] tracking-wider uppercase text-[#E5502F] font-semibold mb-3.5">
          05 — Pricing
        </div>
        <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[32px] sm:text-[40px] tracking-[-0.01em] text-[#16181D] mb-4">
          Simple, upfront pricing
        </h2>
        <p className="text-[17px] text-[#565C68] max-w-[58ch] mb-12">
          Starting points below — every project gets a fixed quote before work begins. No hidden line items or surprise change fees.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`bg-[#FFFFFF] rounded-2xl p-8 flex flex-col justify-between transition-all duration-200 border relative ${
                plan.isFeatured
                  ? 'border-[#0E8F6B] shadow-md ring-1 ring-[#0E8F6B]'
                  : 'border-[#E4E6E8] hover:border-[#CBD5E1] shadow-xs'
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0E8F6B] text-white text-[11.5px] font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{plan.featuredTag || 'Most Popular'}</span>
                </div>
              )}

              <div>
                <div
                  className={`font-['JetBrains_Mono',monospace] text-[12.5px] tracking-wider uppercase font-semibold mb-2.5 ${
                    plan.isFeatured ? 'text-[#0A6E53]' : 'text-[#8A8F98]'
                  }`}
                >
                  {plan.tier}
                </div>

                <div className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[36px] text-[#16181D] mb-1.5 flex items-baseline gap-1">
                  <span>{plan.price}</span>
                </div>

                <div className="text-[13px] text-[#8A8F98] font-medium mb-6">
                  {plan.timeline}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[14px] text-[#565C68]">
                      <span className="text-[#0E8F6B] font-bold text-base leading-none mt-0.5">
                        +
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onSelectTier(plan.id)}
                className={`w-full py-3.5 rounded-full font-semibold text-[14px] text-center transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  plan.isFeatured
                    ? 'bg-[#16181D] hover:bg-[#0A6E53] text-white shadow-xs'
                    : 'bg-[#FAFAF8] hover:bg-[#16181D] text-[#16181D] hover:text-white border border-[#E4E6E8]'
                }`}
              >
                <span>{plan.id === 'custom' ? 'Get a custom quote' : 'Get started with this tier'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
