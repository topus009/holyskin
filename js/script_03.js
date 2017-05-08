(function() {
  function Build(name, args) {
    return function() {
      window.carrotquestasync.push(name, arguments);
    }
  }
  if (typeof carrotquest === 'undefined') {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//cdn.carrotquest.io/api.min.js';
    var x = document.getElementsByTagName('head')[0];
    x.appendChild(s);
    window.carrotquest = {};
    window.carrotquestasync = [];
    carrotquest.settings = {};
    var m = [
      'connect',
      'track',
      'identify',
      'auth',
      'open',
      'onReady',
      'addCallback',
      'removeCallback',
      'trackMessageInteraction'
    ];
    for (var i = 0; i < m.length; i++)
      carrotquest[m[i]] = Build(m[i]);
    }
  })();
carrotquest.connect('8128-6d8c5bcd742a54a4be603114d5c');
