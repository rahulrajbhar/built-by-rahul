import React, { useState } from 'react';
import { ExternalLink, Eye, ArrowRight } from 'lucide-react';
import { SAMPLE_PROJECTS } from '../data/portfolioData';
import { SampleCategory, SampleProject } from '../types';
import { SamplePreviewModal } from './SamplePreviewModal';

interface SampleWorkSectionProps {
  selectedCategory: SampleCategory;
  onSelectCategory: (cat: SampleCategory) => void;
}

export const SampleWorkSection: React.FC<SampleWorkSectionProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const [activePreviewProject, setActivePreviewProject] = useState<SampleProject | null>(null);

  const categories: { id: SampleCategory; label: string }[] = [
    { id: 'all', label: `All Samples (${SAMPLE_PROJECTS.length})` },
    { id: 'landing', label: 'Landing Pages' },
    { id: 'smallbiz', label: 'Small Business Sites' },
    { id: 'portfolio', label: 'Portfolio Sites' },
    { id: 'refresh', label: 'Website Refresh' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? SAMPLE_PROJECTS
      : SAMPLE_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="sample" className="py-20 md:py-24 border-t border-[#E4E6E8]">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="font-['JetBrains_Mono',monospace] text-[12.5px] tracking-wider uppercase text-[#E5502F] font-semibold mb-3.5">
          04 — Sample Work
        </div>
        <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[32px] sm:text-[40px] tracking-[-0.01em] text-[#16181D] mb-4">
          See it in action
        </h2>
        <p className="text-[17px] text-[#565C68] max-w-[64ch] mb-10 leading-relaxed">
          Explore full working sample builds crafted across each of the four core offerings — built with real requirements, fast load times, and conversion-ready layouts.
        </p>

        {/* Filter Buttons with full accessibility */}
        <div
          role="group"
          aria-label="Filter samples"
          className="flex gap-2.5 mb-10 flex-wrap"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4.5 py-2 rounded-full text-[13.5px] font-semibold font-['Inter',sans-serif] transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#16181D] text-white border border-[#16181D] shadow-xs'
                    : 'bg-[#FFFFFF] text-[#565C68] border border-[#E4E6E8] hover:border-[#16181D] hover:text-[#16181D]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Sample Project Cards with aria-live="polite" */}
        <div
          aria-live="polite"
          className="flex flex-col gap-9"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#FFFFFF] border border-[#E4E6E8] hover:border-[#CBD5E1] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] transition-all duration-200 hover:shadow-lg animate-rise"
            >
              {/* Left Mock Preview Device Container */}
              <div
                className="relative min-h-[260px] sm:min-h-[300px] flex items-center justify-center p-6 sm:p-8"
                style={{ background: project.previewBg }}
              >
                <div
                  className="w-full h-full rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    backgroundColor: project.previewInnerBg,
                    color: project.previewInnerColor,
                    border: project.previewBorder ? project.previewBorder : 'none',
                  }}
                >
                  <div>
                    <h3
                      className="font-['Bricolage_Grotesque',sans-serif] text-[20px] sm:text-[23px] font-extrabold leading-tight mb-1"
                      style={{ color: project.brandColor }}
                    >
                      {project.brandName}
                    </h3>
                    <div
                      className="font-['JetBrains_Mono',monospace] text-[10.5px] uppercase tracking-wider font-semibold opacity-90"
                      style={{ color: project.previewTagColor }}
                    >
                      {project.previewTag}
                    </div>
                  </div>

                  <div className="pt-8 flex items-center justify-between">
                    <span
                      className="inline-block text-[11px] sm:text-[12px] font-bold px-4 py-2 rounded-full shadow-xs"
                      style={{
                        backgroundColor: project.ctaBg,
                        color: project.ctaColor,
                      }}
                    >
                      {project.ctaText}
                    </span>

                    <button
                      type="button"
                      onClick={() => setActivePreviewProject(project)}
                      className="text-xs font-semibold flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity bg-black/10 dark:bg-white/10 px-3 py-1.5 rounded-md cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Live Preview</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Description & Action Body */}
              <div className="p-7 sm:p-9 flex flex-col justify-center">
                <div className="font-['JetBrains_Mono',monospace] text-[11.5px] font-bold uppercase tracking-wider text-[#E5502F] mb-2.5">
                  {project.tag}
                </div>
                <h3 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[24px] text-[#16181D] mb-3">
                  {project.title}
                </h3>
                <p className="text-[14.5px] text-[#565C68] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Meta Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.pills.map((pill) => (
                    <span
                      key={pill}
                      className="font-['JetBrains_Mono',monospace] text-[11.5px] bg-[#FAFAF8] border border-[#E4E6E8] px-2.5 py-1 rounded-md text-[#565C68] font-medium"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActivePreviewProject(project)}
                    className="font-semibold text-[14px] bg-[#16181D] hover:bg-[#0A6E53] text-white px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Quick Live Preview</span>
                  </button>

                  <a
                    href={project.sampleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[14px] bg-transparent text-[#16181D] hover:text-[#0A6E53] border border-[#E4E6E8] hover:border-[#16181D] px-4.5 py-2.5 rounded-full transition-colors flex items-center gap-1.5"
                  >
                    <span>Open in new tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Viewport for Live Preview */}
      <SamplePreviewModal
        project={activePreviewProject}
        onClose={() => setActivePreviewProject(null)}
      />
    </section>
  );
};
