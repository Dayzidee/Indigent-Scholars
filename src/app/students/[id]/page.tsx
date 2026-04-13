'use client'

import React, { use } from 'react'
import { STUDENTS_DATA } from '@/lib/constants/mock-data'
import { ScholarProfileDetail } from '@/components/scholar/ScholarProfileDetail'
import { notFound } from 'next/navigation'
interface PageProps {
  params: Promise<{ id: string }>;
}

export default function StudentDetailPage({ params }: PageProps) {
  const resolvedParams = use(params)
  const student = STUDENTS_DATA.find(s => s.id === resolvedParams.id)

  if (!student) {
    notFound()
  }

  // Mocking auth check - in a real app, this would come from a context/hook
  const isLoggedIn = true 
  const userRole = 'sponsor' 

  const accessLevel = isLoggedIn ? (userRole as 'sponsor' | 'admin') : 'public'

  return (
    <div className="bg-zinc-900 min-h-screen pt-20">
      <ScholarProfileDetail student={student} accessLevel={accessLevel} />
    </div>
  )
}
