//<![CDATA[
;
(function() {
  if (window.wit_inited) return;
  window.wit_inited = true;
  var b = (typeof this.href != "undefined") ? this.href : document.location;
  b = b.toString().toLowerCase();
  var c = (window.WitgetData) ? "&userdata=" + JSON.stringify(window.WitgetData) : '';
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.async = true;
  a.src = "//loader.witget.com/v2.2/3c4f35fbefa5eb2f32bbed8c560ddba9?ref=" + document.referrer + "&url=" + b + "&nc=" + Math.random() + c;
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(a, s)
})();
//]]>
