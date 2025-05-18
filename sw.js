// web/sw.js
const CACHE_NAME = 'counter-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/main.dart.js',
  '/flutter.js',
  '/favicon.png',
  '/manifest.json',
  '/assets/AssetManifest.json',
  '/assets/FontManifest.json',
  '/assets/NOTICES',
  '/assets/shaders/ink_sparkle.frag',
  '/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});