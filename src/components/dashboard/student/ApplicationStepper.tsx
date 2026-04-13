'use client'

import { cn } from '@/lib/utils'

interface Step {
  label: string
  icon: string
  status: 'completed' | 'current' | 'pending'
}

interface ApplicationStepperProps {
  steps: Step[]
  className?: string
}

export function ApplicationStepper({ steps, className }: ApplicationStepperProps) {
  const currentStepIndex = steps.findIndex(s => s.status === 'current')
  const lastCompletedIndex = steps.reduce((acc, step, idx) => step.status === 'completed' ? idx : acc, -1)
  
  // Progress line should go up to the current step or the last completed step
  const progressIndex = currentStepIndex !== -1 ? currentStepIndex : (lastCompletedIndex !== -1 ? lastCompletedIndex : 0)
  const progressPercentage = (progressIndex / (steps.length - 1)) * 100

  return (
    <div className={cn("relative mb-16 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide", className)}>
      <div className="min-w-[400px] relative px-4">
      {/* Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-container-high -translate-y-1/2 rounded-full" />
      
      {/* Active Progress Line */}
      <div
        className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 rounded-full transition-all duration-700 ease-in-out"
        style={{ width: `${progressPercentage}%` }}
      />

      <div className="relative flex justify-between">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center gap-3">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 shadow-sm",
                step.status === 'completed' ? "bg-primary text-white" :
                step.status === 'current' ? "bg-zinc-900 border-4 border-primary" :
                "bg-zinc-900 border-4 border-surface-container-high text-zinc-300"
              )}
            >
              {step.status === 'completed' ? (
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check
                </span>
              ) : step.status === 'current' ? (
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              ) : null}
            </div>
            <span
              className={cn(
                "text-xs font-bold font-headline transition-colors",
                step.status === 'completed' || step.status === 'current' ? "text-primary" : "text-zinc-400"
              )}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
