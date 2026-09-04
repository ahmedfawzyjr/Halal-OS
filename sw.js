/**
 * ☪ Halal OS - Service Worker (sw.js)
 * High-Performance Offline PWA & Zero Cloud Telemetry Cache Engine
 * Cache Version: halal-os-v2.0.0-core
 */

const CACHE_NAME = 'halal-os-v2.0.0-core';
const STATIC_ASSETS = [
  './',
  './index.html',
  './index.css',
  './app.js',
  './favicon.svg',
  './manifest.json'
];

// Install Event: Cache critical shell assets
self.addEventListener('install', (event) => {
  console.log('☪ [Halal OS Service Worker] Installing and caching core OS assets...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('☪ [Service Worker] Pre-cache warning (some assets cached individually):', err);
        return Promise.all(
          STATIC_ASSETS.map((url) =>
            cache.add(url).catch((e) => console.log('Skipped optional asset in dev:', url, e))
          )
        );
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clean up legacy caches
self.addEventListener('activate', (event) => {
  console.log('☪ [Halal OS Service Worker] Activating & taking control of clients...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('☪ [Service Worker] Purging legacy cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Cache-first for core assets, network-first for local daemons
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Bypass service worker for local daemon ports (8088, 8080, 8082, etc.) to allow direct localhost IPC
  if (url.port && ['8080', '8082', '8088', '9000', '11434'].includes(url.port)) {
    return;
  }

  // Handle static assets with Stale-While-Revalidate / Cache-First strategy
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch in background to update cache
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse.clone()));
          }
        }).catch(() => {
          // Running fully offline - silently use cache
        });
        return cachedResponse;
      }

      // If not in cache, fetch from network and cache
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // Fallback for HTML documents if offline
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

// Message listener for manual cache updates or ping
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
