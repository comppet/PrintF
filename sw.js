var versao = 10;

const filesToCache = [
  "/BlogFziliotti/",
  "/BlogFziliotti/cursos/",
  "/BlogFziliotti/series/",
  "/BlogFziliotti/about/",
  "/BlogFziliotti/tags/",
  "/BlogFziliotti/offline/index.html",
  "/BlogFziliotti/assets/js/main.js"
];

self.addEventListener("install", function() {
  console.log("Instalou service worker!");
});

self.addEventListener("activate", function() {
  caches.open("blog-printf-" + versao).then(cache => {
    cache.addAll(filesToCache).then(function() {
      caches.delete("blog-printf-" + (versao - 1));
      caches.delete("blog-printf");
    });
  });
});

self.addEventListener("fetch", function(event) {
  let pedido = event.request;
  let promiseResposta = caches.match(pedido).then(respostaCache => {
    let resposta = respostaCache ? respostaCache : fetch(pedido);
    return resposta;
  });

  event.respondWith(promiseResposta);
});
