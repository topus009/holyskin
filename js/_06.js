$(document).ready(function() {
  function runAnimation65(i) {
    var all = 12;
    var all_margin = 290
    $('#animation65').css({
      'background-position': '-' + 24 * (i - 1) + 'px 0',
      'margin-left': all_margin - 27 * (all - i),
    });
    if (i == 12) {
      i = 0;
    }
    i++;
    setTimeout(function() {
      runAnimation65(i);
    }, 225);
  }
  runAnimation65(1);
});
