'use client'

import { cn } from '@/lib/utils'

interface MetricCardProps {
  title: string
  value: string
  subtitle?: string
  icon: string
  trend?: {
    value: number
    positive: boolean
  }
  variant?: 'default' | 'primary' | 'secondary'
  className?: string
}

export function MetricCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  variant = 'default',
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl p-8 border border-outline-variant/20 shadow-sm transition-all duration-300 hover:shadow-md h-full flex flex-col justify-between",
        variant === 'default' && "bg-surface-container-lowest",
        variant === 'primary' && "bg-primary scholar-gradient text-white",
        variant === 'secondary' && "bg-secondary-container text-on-secondary-container",
        className
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center",
          variant === 'default' ? "bg-primary-container/10 text-primary" : "bg-white/20 text-white"
        )}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span className={cn(
          "text-[10px] font-bold tracking-widest uppercase opacity-70",
          variant === 'default' ? "text-on-surface-variant" : "text-white/70"
        )}>
          {title}
        </span>
      </div>

      <div>
        <h4 className="text-3xl font-extrabold font-headline mb-2 leading-tight">{value}</h4>
        {subtitle && (
          <p className={cn(
            "text-sm",
            variant === 'default' ? "text-on-surface-variant" : "text-white/80"
          )}>
            {subtitle}
          </p>
        )}
      </div>

      {trend && (
        <div className="mt-6 flex items-center gap-2">
          <div className={cn(
            "w-full h-1.5 rounded-full overflow-hidden",
            variant === 'default' ? "bg-zinc-100" : "bg-white/20"
          )}>
            <div
              className={cn(
                "h-full rounded-full transition-all duration-700",
                variant === 'primary' ? "bg-secondary" : "bg-primary"
              )}
              style={{ width: `${trend.value}%` }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
