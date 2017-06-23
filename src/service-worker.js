/**
 * Created by zkirilov on 23.6.2017 г..
 */
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
	'/'
];

self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});