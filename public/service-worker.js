const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/index.js',
    '/styles.css',
    '/db/db.js'
];

const CACHE_NAME = "static-cache-v2";

self.addEventListener("install", function (evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});

