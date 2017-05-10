$(document).ready(function() {
  window.validated_emails = [];

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+(com)|(ru)|(org)|(net)|(by)|(kz)))$/;
    return re.test(email);
  }

  function check_input_for_mail() {
    var tv = $(this).val();
    if (validateEmail(tv) && !tv.indexOf(window.validated_emails) + 1) {
      //send to external
      (window["rrApiOnReady"] = window["rrApiOnReady"] || []).push(function() {
        try {
          rrApi.setEmail(tv);
          window.validated_emails.push(tv);
        } catch (e) {}
      });
    }
  }
  $('input[type=text],input[type=email]').each(check_input_for_mail); //for loaded page
  $('input[type=text],input[type=email]').change(check_input_for_mail);
  $('input[type=text],input[type=email]').keyup(check_input_for_mail);
});

function check_conv_popup() {
  var input = $('#properties_email');
  console.log('checking...');
  //удаление яндекс советника. пихаю сюда, чтобы не создавать лишний счетчик
  if ($('[title="Предложения других магазинов"]') && $('[title="Предложения других магазинов"]').parents().length) {
    $('[title="Предложения других магазинов"]').parents()[0].remove();
  }
  if (!input.length) {
    return setTimeout(check_conv_popup, 1000);
  }
  console.log('submit was listened');
  $('#properties_email').parents('form.cnv-widget_workarea__pop-up').submit(function(e) {
    console.log(e);
    var email_to_rocket = $(this).find('#properties_email').val();
    console.log('submit form with ' + email_to_rocket);
    try {
      rrApi.setEmail(email_to_rocket);
    } catch (e) {}
  });
}
$(document).ready(function() {
  check_conv_popup();
});
