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
  
  document.getElementById('hamburger-toggle').addEventListener('click', function() {
    const nav = document.getElementById('main-nav');
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
        this.innerHTML = '&times;'; // Change to 'X' symbol
    } else {
        nav.classList.add('hidden');
        this.innerHTML = '&#9776;'; // Change back to hamburger symbol
    }
});
