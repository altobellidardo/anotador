const CACHE_NAME = 'anotador-v1'

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Pre-cache primary routes
      return cache.addAll([
        '/',
        '/truco',
        '/berenjena',
        '/chancho',
        '/pedro',
        '/chinchon'
      ])
    })
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    })
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  const url = new URL(event.request.url)

  // Don't cache cross origin requests or API
  if (!url.protocol.startsWith('http')) return
  if (url.origin !== self.location.origin) return

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const networkFetch = fetch(event.request).then((response) => {
        // Update the cache with a clone of the fresh response
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })
        }
        return response
      }).catch((e) => {
        // Fallback gracefully handling offline
      })

      // Serve from cache first (very fast), map network response async via stale-while-revalidate
      return cachedResponse || networkFetch
    })
  )
})
