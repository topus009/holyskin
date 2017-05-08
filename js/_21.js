$(document).ready(function() {
  if (typeof carrotquest != 'undefined') {
    if (window.screen.availWidth < 768) {
      carrotquest.identify({
        "Маленький экран": 1
      });
    } else {
      carrotquest.identify({
        "Маленький экран": 0
      });
    }
    carrotquest.identify([{
      "op": "set_once",
      "key": "Зарегистрировался",
      "value": "0"
    }, ]);
  }
  refresh_captcha();
});
