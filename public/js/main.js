document.getElementById('copy').addEventListener('click', function () {
  var btn = this, text = document.getElementById('email').textContent;
  function done(ok) { btn.textContent = ok ? 'Copied' : 'Select and copy above'; setTimeout(function () { btn.textContent = 'Copy email'; }, 2000); }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
  } else { done(false); }
});
(function () {
  var root = document.documentElement, btn = document.getElementById('theme-toggle');
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  function current() { return root.getAttribute('data-theme') || (mq.matches ? 'dark' : 'light'); }
  function sync() {
    var t = current();
    root.setAttribute('data-theme', t);
    btn.setAttribute('aria-label', t === 'dark' ? 'Dark theme on. Switch to light theme' : 'Light theme on. Switch to dark theme');
    btn.setAttribute('aria-pressed', t === 'dark');
  }
  function set(t, save) {
    root.setAttribute('data-theme', t);
    if (save) { try { localStorage.setItem('mbs-theme', t); } catch (e) {} }
    sync();
  }
  btn.addEventListener('click', function () { set(current() === 'dark' ? 'light' : 'dark', true); });
  window.addEventListener('hashchange', function () {
    var h = location.hash.slice(1);
    if (h === 'light' || h === 'dark') set(h, false);
  });
  sync();
})();
