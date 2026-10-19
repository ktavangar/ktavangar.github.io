// Highlight the nav link for the section currently in view (index page only).
(function () {
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  var links = document.querySelectorAll('.nav a[href^="#"], .nav a[href*="index.html#"]');
  var map = {};
  links.forEach(function (a) { var id = a.hash && a.hash.slice(1); if (id) map[id] = a; });
  var ids = Object.keys(map);
  if (!ids.length || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        links.forEach(function (a) { a.classList.remove('active'); });
        map[e.target.id].classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  ids.forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
})();
