self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('site-static').then((cache) => {
        return cache.addAll([
          './',
          './index.html',
          './style/base.css',
          './style/larger.css',
          './scripts/getDates.js',
          './scripts/hamburger.js',
          './scripts/darkmode.js',
          './week05/script/weather.js',
          './images/Ruby.webp',
          './images/dctemple.webp'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  