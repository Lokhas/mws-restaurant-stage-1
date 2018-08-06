/*var cacheName = 'site-cache-v1';
var urlsToCache = [ //changer le nom de la variable
    '/',
    '/index.html',
    '/restaurant.html?id=1',
    '/restaurant.html?id=2',
    '/restaurant.html?id=3',
    '/restaurant.html?id=4',
    '/restaurant.html?id=5',
    '/restaurant.html?id=6',
    '/restaurant.html?id=7',
    '/restaurant.html?id=8',
    '/restaurant.html?id=9',
    '/restaurant.html?id=10'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cacheName)
       .then(function(cache) {
        //console.log('Opnd cache');
        return cache.addAll(urlsToCache);
})
);
});


//fetch to rewrite if needed
self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
        // Cache hit - return response
        if (response) {
            return response;
        }
        var fetchRequest = event.request.clone();
        return fetch(fetchRequest).then(function(response) {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
            }
            var responseToCache = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
                cache.put(event.request, responseToCache);
            });
            return response;
        });
    }));
});

           
self.addEventListener('activate', function(event) {
    var cacheWhiteList = ['site-cache-v2'];
    event.waitUntil(caches.keys().then(function(cacheNames) {
        if (cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
        }
    }));
});
*/