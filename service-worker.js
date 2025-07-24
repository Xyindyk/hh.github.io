const CACHE_NAME = "bmw-catalog-v1";
const urlsToCache = [
  "/index.html",
  "/2.css",
  "/BMW_M4.html",
  "/BMW_M5.html",
  "/back.html",
  "/test.php",
  "/M4.jpg",
  "/X5.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});