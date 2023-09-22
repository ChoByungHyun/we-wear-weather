self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (r) {
      console.log('[Service Worker] Fetching resource: ' + e.request.url);
      return (
        r ||
        fetch(e.request).then(function (response) {
          return caches.open('danbi').then(function (cache) {
            console.log('[Service Worker] Caching new resource: ' + e.request.url);
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    }),
  );
});

self.addEventListener('install', function (e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open('danbi').then(function (cache) {
      return cache.addAll(['/', '/index.html', '/src/']);
    }),
  );
});
self.addEventListener('beforeinstallprompt', function (event) {
  // 설치 프롬프트를 트리거하는 로직을 작성합니다.
  // 예를 들어, 사용자에게 설치를 제안하는 UI를 띄우거나, 특정 조건을 확인한 후 트리거할 수 있습니다.
  event.prompt();
});
