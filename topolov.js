window.onload = function() {
  setTimeout(show_pop_up, 3000);
}

function show_pop_up() {
  var block = document.querySelector('.pop_up_topolov');
  block.classList.remove('hide');
  var appendix = document.body;
  var x = "<div class='pop_up_topolov_overlay'></div>";
  appendix.insertAdjacentHTML('afterbegin',x);
}

function close_pop_up() {
  var block = document.querySelector('.pop_up_topolov');
  block.classList.add('hide');
  document.querySelector('.pop_up_topolov_overlay').remove();
}
