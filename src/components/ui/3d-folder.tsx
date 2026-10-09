import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FolderCardItem {
  id?: string | number;
  title: string;
  subtitle?: string;
  badge?: string;
  image?: string;
  description?: string;
  accentColor?: string;
}

export interface ThreeDFolderProps {
  title?: string;
  subtitle?: string;
  category?: string;
  items?: FolderCardItem[];
  className?: string;
  onItemClick?: (item: FolderCardItem) => void;
}

const defaultFolderItems: FolderCardItem[] = [
  {
    id: '1',
    title: 'Pelvic Floor Rehabilitation',
    subtitle: 'Confidential & Private Suite',
    badge: 'Specialized Care',
    description: 'Targeted muscle strengthening, biofeedback, and pelvic pain management.',
    accentColor: '#5F6B45'
  },
  {
    id: '2',
    title: 'Antenatal & Postnatal Care',
    subtitle: 'Pregnancy Wellbeing',
    badge: 'Maternal Health',
    description: 'Diastasis recti recovery, core stabilization, and comfortable labor preparation.',
    accentColor: '#B89A5A'
  },
  {
    id: '3',
    title: 'Aesthetic Skin Rejuvenation',
    subtitle: 'Clinical Glow Protocols',
    badge: 'Skin Division',
    description: 'Non-invasive facial toning, medical peels, and hyperpigmentation care.',
    accentColor: '#3F4A32'
  }
];

export function ThreeDFolder({
  title = "Clinical Specialty Folders",
  subtitle = "Hover over the folder tabs to explore specialized care protocols.",
  category = "FEATURED CLINICAL SERVICES",
  items = defaultFolderItems,
  className = "",
  onItemClick
}: ThreeDFolderProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div 
      className={`relative w-full bg-[#FAF7F1] p-6 sm:p-10 rounded-[32px] border-2 border-[#D8D0C3] shadow-[0_15px_40px_rgba(41,50,37,0.06)] overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category & Title */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D8D0C3] pb-4">
        <div>
          <span className="text-[#5F6B45] text-[10px] uppercase font-mono font-extrabold tracking-widest block mb-1">
            {category}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#293225] font-bold">
            {title}
          </h3>
        </div>
        {subtitle && (
          <p className="text-xs text-[#252822]/70 font-light max-w-md">
            {subtitle}
          </p>
        )}
      </div>

      {/* 3D Folder Container Stage */}
      <div className="relative w-full min-h-[320px] sm:min-h-[380px] flex flex-col justify-end pt-8">
        
        {/* Top Folder Tabs Header */}
        <div className="flex gap-2 sm:gap-3 z-20 overflow-x-auto pb-2 scrollbar-none">
          {items.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(idx);
                  if (onItemClick) onItemClick(item);
                }}
                onMouseEnter={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-t-2xl font-serif text-xs sm:text-sm font-bold transition-all duration-300 border-t-2 border-x-2 border-[#D8D0C3] shrink-0 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#293225] text-white border-[#293225] -mb-px shadow-lg scale-[1.02]'
                    : 'bg-[#F4EFE6] text-[#293225] hover:bg-[#E8ECDF] hover:text-[#5F6B45]'
                }`}
              >
                <span 
                  className="w-2.5 h-2.5 rounded-full" 
                  style={{ backgroundColor: item.accentColor || '#5F6B45' }} 
                />
                {item.title}
                {item.badge && (
                  <span className="text-[9px] bg-[#5F6B45]/20 text-[#5F6B45] px-2 py-0.5 rounded-full font-sans uppercase font-bold tracking-wider ml-1">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* 3D Layered Folder Cards Stack */}
        <div 
          className="relative w-full min-h-[260px] bg-[#293225] rounded-b-3xl rounded-tr-3xl p-6 sm:p-8 text-white border-2 border-[#293225] shadow-2xl overflow-hidden"
          style={{
            perspective: '1000px',
          }}
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#5F6B45]/20 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {items[activeTab] && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, rotateX: -10, scale: 0.98 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0, 
                  scale: 1,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
                }}
                exit={{ opacity: 0, y: -15, rotateX: 10, scale: 0.98 }}
                className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 h-full"
              >
                <div className="space-y-3 max-w-xl">
                  {items[activeTab].badge && (
                    <span className="bg-[#B89A5A] text-[#293225] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full inline-block shadow-sm">
                      {items[activeTab].badge}
                    </span>
                  )}

                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F1] leading-tight">
                    {items[activeTab].title}
                  </h4>

                  {items[activeTab].subtitle && (
                    <p className="text-xs sm:text-sm text-[#B89A5A] font-medium tracking-wide">
                      {items[activeTab].subtitle}
                    </p>
                  )}

                  {items[activeTab].description && (
                    <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                      {items[activeTab].description}
                    </p>
                  )}
                </div>

                <div className="shrink-0 flex flex-col gap-3">
                  <button 
                    onClick={() => onItemClick && onItemClick(items[activeTab])}
                    className="bg-[#5F6B45] hover:bg-[#B89A5A] text-[#FAF7F1] hover:text-[#293225] px-6 py-3 rounded-full font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl border border-[#B89A5A]/40 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>EXPLORE SPECIALTY</span>
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

export default ThreeDFolder;
