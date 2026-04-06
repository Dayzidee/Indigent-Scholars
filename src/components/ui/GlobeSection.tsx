'use client';

import { motion } from 'framer-motion';

interface GlobeSectionProps {
  size?: number;
  opacity?: number;
  className?: string;
  offsetX?: string;
  offsetY?: string;
}

/**
 * Decorative rotating globe, placed absolutely inside any section.
 * Each section can have its own globe, solving the fixed-globe scroll problem.
 */
export function GlobeSection({
  size = 700,
  opacity = 0.18,
  className = '',
  offsetX = '50%',
  offsetY = '50%',
}: GlobeSectionProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity, scale: 1, rotateY: 360 }}
        transition={{
          opacity: { duration: 2, ease: 'easeOut' },
          scale: { duration: 2, ease: 'easeOut' },
          rotateY: { repeat: Infinity, duration: 38, ease: 'linear' },
        }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1200px',
          width: `${size}px`,
          height: `${size}px`,
          position: 'absolute',
          left: offsetX,
          top: offsetY,
          transform: 'translate(-50%, -50%) rotateY(0deg)',
        }}
      >
        <img
          alt=""
          className="w-full h-full object-contain"
          style={{
            filter:
              'invert(68%) sepia(38%) saturate(996%) hue-rotate(5deg) brightness(96%) contrast(94%) drop-shadow(0 20px 30px rgba(218,165,32,0.4))',
          }}
          src="/africa.svg"
        />
      </motion.div>
    </div>
  );
}
