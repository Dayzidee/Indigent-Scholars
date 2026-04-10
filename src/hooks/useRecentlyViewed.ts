'use client'

import { useState, useEffect } from 'react'

const RECENTLY_VIEWED_KEY = 'indigent_scholars_recent_views'
const MAX_RECENT = 6

export function useRecentlyViewed() {
  const [recentIds, setRecentIds] = useState<string[]>([])

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(RECENTLY_VIEWED_KEY)
    if (stored) {
      try {
        setRecentIds(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to parse recently viewed', e)
      }
    }
  }, [])

  const addView = (id: string) => {
    setRecentIds((prev) => {
      // Remove if exists, then add to front
      const filtered = prev.filter((i) => i !== id)
      const updated = [id, ...filtered].slice(0, MAX_RECENT)
      
      // Persist
      localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(updated))
      return updated
    })
  }

  return { recentIds, addView }
}
