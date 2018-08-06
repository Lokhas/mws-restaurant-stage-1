/*if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
 */

var cacheName = 'site-cache-v1';
var urlsToCache = [ //changer le nom de la variable
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

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
          .then(function(response) {
            if(response) {
                return response;
            }
            return fetch(event.request);
          })
    );
});

