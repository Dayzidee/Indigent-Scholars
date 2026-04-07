'use client'

import { SubmittedView } from '@/components/dashboard/student/SubmittedView'

export default function StudentApplicationPage() {
  // For now, we Re-use the SubmittedView as it contains all application details
  // In a real app, this might have more 'edit' functionality
  return (
    <div className="pb-20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-extrabold font-headline text-on-surface tracking-tight mb-2">My Application</h2>
        <p className="text-on-surface-variant font-medium">Manage your scholarship profile and uploaded documents.</p>
      </div>
      <SubmittedView />
    </div>
  )
}
