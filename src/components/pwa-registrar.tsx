'use client'

import { useEffect } from 'react'

export function PwaRegistrar () {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (reg) => console.log('PWA Service Worker registration succeeded', reg.scope),
          (err) => console.error('PWA Service Worker registration failed', err)
        )
      })
    }
  }, [])

  return null
}
