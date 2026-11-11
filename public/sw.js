// Logos Lexicon — Production Service Worker
// Version: 1.0.0
// Strict rules: Never cache /admin/*, never cache error responses/redirects, provide verified offline shell fallback.

const CACHE_VERSION = 'logos-lexicon-v1.0.0';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const DATA_CACHE = `${CACHE_VERSION}-data`;

const STATIC_ASSETS = [
  '/',
  '/manifest.webmanifest',
  '/manifest.json',
  '/favicon.svg',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-192.svg',
  '/icons/icon-512.svg',
  '/offline.html',
  '/install',
  '/status',
];

// Install Event: Resilient, non-blocking cache population guaranteed to succeed worldwide
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(async (cache) => {
      for (const asset of STATIC_ASSETS) {
        try {
          await cache.add(asset);
        } catch (e) {
          console.warn('SW asset pre-cache skipped:', asset, e);
        }
      }
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clean old legacy caches & claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key.startsWith('logos-lexicon-') && !key.startsWith(CACHE_VERSION))
          .map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Cache-First for static assets, Network-First with verified offline fallback for pages
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 1. Strictly ignore non-GET requests, non-http protocols, and browser extensions
  if (event.request.method !== 'GET' || !url.protocol.startsWith('http')) {
    return;
  }

  // 2. PROHIBITION: Never cache or intercept administrative routes or login sessions
  if (url.pathname.startsWith('/admin') || url.pathname.startsWith('/api/auth')) {
    return;
  }

  // 3. Static Assets (Icons, fonts, static SVGs, images): Cache-First
  if (
    url.pathname.startsWith('/icons/') ||
    url.pathname.startsWith('/qr/') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.woff2')
  ) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((networkRes) => {
          if (networkRes && networkRes.status === 200 && networkRes.type === 'basic') {
            const clone = networkRes.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(event.request, clone));
          }
          return networkRes;
        });
      })
    );
    return;
  }

  // 4. HTML Navigation & Dynamic API: Network-First with Safe Fallback
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // PROHIBITION: Never cache error pages (4xx/5xx), maintenance screens, or redirects
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          networkResponse.type === 'basic' &&
          !networkResponse.redirected
        ) {
          const responseClone = networkResponse.clone();
          caches.open(DATA_CACHE).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(async () => {
        // Offline: Attempt to return verified cached entry
        const cached = await caches.match(event.request);
        if (cached) return cached;

        // Navigation requests fallback to verified offline page
        if (event.request.headers.get('accept')?.includes('text/html')) {
          const offlineShell = await caches.match('/offline.html');
          if (offlineShell) return offlineShell;
          const rootCached = await caches.match('/');
          if (rootCached) return rootCached;
        }

        return new Response(
          JSON.stringify({
            error: 'Offline',
            message: 'You are viewing Logos Lexicon in offline mode. Live query unavailable.',
          }),
          {
            status: 503,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      })
  );
});

// Update listener: Allow controlled UI-triggered refresh
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
