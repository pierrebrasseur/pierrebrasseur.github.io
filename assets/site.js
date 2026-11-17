/* Sommaire latéral : signale la section en cours de lecture. */
(function () {
  var toc = document.querySelector('.page-toc');
  if (!toc) return;
  var links = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
  var heads = links.map(function (a) {
    return document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)));
  });
  var ticking = false;

  function update() {
    ticking = false;
    var limit = window.innerHeight * 0.3;
    var current = -1;
    for (var i = 0; i < heads.length; i++) {
      var h = heads[i];
      if (!h || h.offsetParent === null) continue;
      if (h.getBoundingClientRect().top <= limit) current = i;
    }
    links.forEach(function (a, i) {
      if (i === current) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
