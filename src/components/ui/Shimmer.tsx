'use client'

import { cn } from '@/lib/utils'

interface ShimmerProps {
  className?: string
  width?: string | number
  height?: string | number
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full' | 'none'
}

export function Shimmer({ 
  className, 
  width = '100%', 
  height = '1rem', 
  rounded = 'md' 
}: ShimmerProps) {
  
  const radiusMap = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    '4xl': 'rounded-4xl',
    full: 'rounded-full',
  }

  return (
    <div 
      className={cn(
        "shimmer-base overflow-hidden",
        radiusMap[rounded],
        className
      )}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width, 
        height: typeof height === 'number' ? `${height}px` : height 
      }}
    />
  )
}

export function PageShimmer() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="space-y-4">
        <Shimmer width={240} height={40} rounded="xl" />
        <Shimmer width="60%" height={20} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Shimmer height={160} rounded="2xl" />
        <Shimmer height={160} rounded="2xl" />
        <Shimmer height={160} rounded="2xl" />
      </div>
      <Shimmer height={400} rounded="3xl" />
    </div>
  )
}
