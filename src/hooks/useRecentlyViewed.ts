import { useState, useEffect, useCallback } from 'react'

const RECENTLY_VIEWED_KEY = 'indigent_scholars_recent_views'
const MAX_RECENT = 6

export function useRecentlyViewed() {
  const [recentIds, setRecentIds] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(RECENTLY_VIEWED_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) setRecentIds(parsed)
      } catch (e) {
        console.error('Failed to parse recently viewed', e)
      }
    }
    setMounted(true)
  }, [])

  const addView = useCallback((id: string) => {
    setRecentIds((prev) => {
      const filtered = prev.filter((i) => i !== id)
      const updated = [id, ...filtered].slice(0, MAX_RECENT)
      
      // Persist to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(updated))
      }
      return updated
    })
  }, [])

  return { recentIds, addView }
}
