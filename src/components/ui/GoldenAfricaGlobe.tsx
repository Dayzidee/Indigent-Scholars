'use client';

import { motion } from 'framer-motion';

export function GoldenAfricaGlobe() {
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4, rotateY: 360 }}
        transition={{ 
          scale: { duration: 1.5, ease: "easeOut" },
          opacity: { duration: 1.5, ease: "easeOut" },
          rotateY: { repeat: Infinity, duration: 40, ease: "linear" }
        }}
        className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <img
          alt="3D Golden Africa Logo"
          className="w-full h-full object-contain"
          style={{ 
            filter: "invert(68%) sepia(38%) saturate(996%) hue-rotate(5deg) brightness(96%) contrast(94%) drop-shadow(0 20px 30px rgba(218,165,32,0.5))"
          }}
          src="/africa.svg"
        />
      </motion.div>
    </div>
  );
}
