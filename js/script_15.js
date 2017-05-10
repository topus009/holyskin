$(document).ready(function() {
  if ($('#cont').height() + 300 < $('.site-sidebar').height() && window.location.pathname != "/") {
    $('.very_moe_height').css('display', 'none')
  }
  var $menu = $(".site-header");
  $menu.addClass("default");
  $(window).scroll(function() {
    if ($(this).scrollTop() > parseInt($menu.height()) && $menu.hasClass("default")) {
      //$menu.switchClass( "default", "fixed", 500);
      if (!$(".site-header.fixed").length) {
        //show menu fixed\
        $menu.removeClass('srch').clone(true).appendTo('.viewport-wrapper').addClass('fixed').fadeIn('slow');
      }
    } else if ($(this).scrollTop() <= parseInt($menu.height())) {
      //$menu.switchClass( "fixed", "default", 500 );
      $(".site-header.fixed").fadeOut('fast', function() {
        $(this).remove();
      });
      $(".site-header").addClass('srch');
    }
  }); //scroll
});
$('#callback-send').submit(function(form) {
  var postData = $(this).serializeArray();
  var formUrl = '/callback';
  $.ajax({
    url: formUrl,
    type: "POST",
    data: postData,
    success: function(data, textStatus, jqXHR) {
      $('.form').empty().append(data);
    }
  });
  form.preventDefault();
});

function getProductFilter() {
  $.ajax({
    url: '/widget/productfilter',
    type: "GET",
    success: function(data, textStatus, jqXHR) {
      $('#product-filter').empty().append(data);
    }
  });
}

function favoriteCount() {
  var count;
  $.ajax({
    url: '/user/favorites',
    type: "GET",
    success: function(data, textStatus, jqXHR) {
      $('.countFavorite').empty().append(data);
    }
  });
}

function favoriteCount_cookie() {
  jQuery.ajax({
    url: '../ajax/favorites_cookie_count',
    type: "GET",
  }).success(function(data) {
    var vrem = '(0)';
    $('.countFavorite').empty().append(data);
  });
}
jQuery(document).ready(function() {
  favoriteCount_cookie();
  refreshWidgetCart();
  refresh_captcha();
  $('#order_status-send').submit(function(form) {
    var postData = $(this).serializeArray();
    var u = $(this).attr('action');
    $.ajax({
      type: "POST",
      data: postData,
      url: u,
      dataType: 'json',
      success: function(result) {
        $('.field_error_msg').text('');
        if (result.error) {
          $('.field_error_msg[error_name=' + result.error.name + ']').text(result.error.text);
        } else {
          $('#result_status_id').html('<h3>' + result.result + '</h3>');
        }
        $(form).find('input[name!=submit]').val('');
      }
    }).complete()
    form.preventDefault();
  });
});
