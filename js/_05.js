$(document).ready(function() {
  function runAnimation64(i) {
    $('#animation64').css('background-position', '0 -' + 208 * (i - 1) + 'px');
    if (i == 3) {
      i = 0;
    }
    i++;
    setTimeout(function() {
      runAnimation64(i);
    }, 1500);
  }
  runAnimation64(1);
});
