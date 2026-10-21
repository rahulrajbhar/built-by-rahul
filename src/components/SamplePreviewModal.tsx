import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Monitor, Tablet, Smartphone, Sparkles } from 'lucide-react';
import { SampleProject } from '../types';

interface SamplePreviewModalProps {
  project: SampleProject | null;
  onClose: () => void;
}

type DeviceView = 'desktop' | 'tablet' | 'mobile';

export const SamplePreviewModal: React.FC<SamplePreviewModalProps> = ({ project, onClose }) => {
  const [deviceView, setDeviceView] = useState<DeviceView>('desktop');

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const getContainerWidth = () => {
    switch (deviceView) {
      case 'mobile':
        return 'max-w-[400px]';
      case 'tablet':
        return 'max-w-[768px]';
      case 'desktop':
      default:
        return 'max-w-[1200px]';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-sm animate-rise"
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-modal-title"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`relative z-10 w-full ${getContainerWidth()} h-[92vh] max-h-[900px] bg-[#FFFFFF] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#E4E6E8] transition-all duration-300`}
      >
        {/* Modal Top Header Bar */}
        <div className="bg-[#16181D] text-white px-5 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3 truncate pr-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0E8F6B] shrink-0" />
            <h2 id="preview-modal-title" className="font-['Bricolage_Grotesque',sans-serif] font-bold text-base truncate">
              {project.title}
            </h2>
            <span className="hidden sm:inline-block text-xs font-['JetBrains_Mono',monospace] text-[#8A8F98] uppercase">
              ({project.subtitle})
            </span>
          </div>

          {/* Device Switcher */}
          <div className="flex items-center gap-1.5 bg-[#262A33] p-1 rounded-lg">
            <button
              type="button"
              onClick={() => setDeviceView('desktop')}
              className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors cursor-pointer ${
                deviceView === 'desktop' ? 'bg-[#16181D] text-white shadow-xs' : 'text-[#8A8F98] hover:text-white'
              }`}
              title="Desktop View (100%)"
              aria-label="Desktop preview"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Desktop</span>
            </button>

            <button
              type="button"
              onClick={() => setDeviceView('tablet')}
              className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors cursor-pointer ${
                deviceView === 'tablet' ? 'bg-[#16181D] text-white shadow-xs' : 'text-[#8A8F98] hover:text-white'
              }`}
              title="Tablet View (768px)"
              aria-label="Tablet preview"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Tablet</span>
            </button>

            <button
              type="button"
              onClick={() => setDeviceView('mobile')}
              className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors cursor-pointer ${
                deviceView === 'mobile' ? 'bg-[#16181D] text-white shadow-xs' : 'text-[#8A8F98] hover:text-white'
              }`}
              title="Mobile View (375px)"
              aria-label="Mobile preview"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Mobile</span>
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <a
              href={project.sampleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-xs font-semibold text-[#FF6B4A] hover:text-[#E5502F] px-2.5 py-1.5 rounded hover:bg-white/10 transition-colors"
            >
              <span>Open in new tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Feature Highlights sub-bar */}
        <div className="bg-[#FAFAF8] border-b border-[#E4E6E8] px-5 py-2 flex items-center justify-between text-xs text-[#565C68] shrink-0 overflow-x-auto">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#0E8F6B]" />
            <span className="font-medium text-[#16181D]">Built features:</span>
            <span className="truncate">{project.features.join(' · ')}</span>
          </div>
          <span className="font-['JetBrains_Mono',monospace] text-[#8A8F98] text-[11px] shrink-0 ml-4">
            Live Interactive HTML Demo
          </span>
        </div>

        {/* Iframe Viewport Container */}
        <div className="flex-1 bg-[#F1F3F5] overflow-auto flex justify-center p-2 sm:p-4">
          <div
            className={`w-full h-full bg-white rounded-lg shadow-md overflow-hidden border border-[#E4E6E8] transition-all duration-300 ${
              deviceView === 'mobile' ? 'max-w-[390px]' : deviceView === 'tablet' ? 'max-w-[768px]' : 'max-w-full'
            }`}
          >
            <iframe
              src={project.sampleUrl}
              title={project.title}
              className="w-full h-full border-0 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
