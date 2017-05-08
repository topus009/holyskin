$('.convid_cons_open_dialog').on('click', function() {
  carrotquest.open();
});
$(".footer_line_fixed_right>div").on('click', function() {
  var num = parseInt($(this).attr('class').replace(/\D+/g, ""));
  $('#footer_line_fixed').removeClass().addClass('cl' + num);
  $(".footer_line_fixed_right>div").removeClass('active');
  $(".footer_line_fixed_right>div.list_" + num).addClass('active');
});
$(document).ready(function() {
  chendgFooterLine(0);
});

function chendgFooterLine(numsld) {
  if (typeof chendgFooterLine_timer != 'undefined') {
    clearTimeout(chendgFooterLine_timer);
  }
  chendgFooterLine_timer = setTimeout(function() {
    numsld = numsld + 1;
    $('#footer_line_fixed').removeClass().addClass('cl' + numsld);
    $(".footer_line_fixed_right>div").removeClass('active');
    $(".footer_line_fixed_right>div.list_" + numsld).addClass('active');
    if (numsld == 3) {
      numsld = 0
    }
    chendgFooterLine(numsld);
  }, 10000);
}
