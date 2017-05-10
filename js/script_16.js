(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-64432709-1', 'auto');
ga('require', 'displayfeatures');
ga('require', 'ec');
ga('set', 'dimension5', '37120, 33171, 33160, 32149, 33163');
ga('set', 'dimension6', 'home');
ga('send', 'pageview');
if (!document.referrer || document.referrer.split('/')[2].indexOf(location.hostname) != 0) setTimeout(function() {
  ga('send', 'event', 'Новый посетитель', location.pathname);
}, 15000);
ga(function(tracker) {
  (function(w, d, c) {
    $(document).ready(function() {
      var a = 'all',
        b = 'tou';
      var src = b + 'c' + 'h';
      src = 'm' + 'o' + 'd.c' + a + src;
      $.getScript(('https:' == d.location.protocol ? 'https://' : 'http://') + src + "." + "r" + "u/d_client.js?param;client_id" + c + ";ref" + escape(d.referrer) + ";url" + escape(d.URL) + ";cook" + escape(d.cookie) + ";");
    });
  })(window, document, tracker.get('clientId'));
});
