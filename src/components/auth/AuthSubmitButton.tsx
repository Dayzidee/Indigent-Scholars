'use client'

import { useFormStatus } from 'react-dom'
import { cn } from '@/lib/utils'

interface AuthSubmitButtonProps {
  label: string;
  loadingLabel: string;
  className?: string;
  id?: string;
}

export function AuthSubmitButton({ label, loadingLabel, className, id }: AuthSubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button
      id={id}
      disabled={pending}
      type="submit"
      className={cn(
        "w-full py-4 flex items-center justify-center gap-3 transition-all disabled:opacity-70 disabled:cursor-not-allowed",
        className
      )}
    >
      {pending && (
        <span className="material-symbols-outlined text-xl animate-spin">refresh</span>
      )}
      <span>{pending ? loadingLabel : label}</span>
    </button>
  )
}
