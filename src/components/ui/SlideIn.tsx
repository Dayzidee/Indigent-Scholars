'use client';

import React, { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

interface SlideInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export function SlideIn({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  viewportMargin = '-50px',
  once = true,
}: SlideInProps) {
  const getVariants = (): Variants => {
    let x = 0;
    let y = 0;

    switch (direction) {
      case 'left':
        x = -50;
        break;
      case 'right':
        x = 50;
        break;
      case 'up':
        y = 50;
        break;
      case 'down':
        y = -50;
        break;
    }

    return {
      hidden: {
        opacity: 0,
        x,
        y,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1], // custom ease-out
          delay: delay,
        },
      },
    };
  };

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
    >
      {children}
    </motion.div>
  );
}
