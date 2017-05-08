  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = (Math.floor((t / 1000) % 60) > 9) ? Math.floor((t / 1000) % 60) : '0' + Math.floor((t / 1000) % 60);
    var minutes = (Math.floor((t / 1000 / 60) % 60) > 9) ? Math.floor((t / 1000 / 60) % 60) : '0' + Math.floor((t / 1000 / 60) % 60);
    var hours = (Math.floor(t / (1000 * 60 * 60) % 24) > 9) ? Math.floor(t / (1000 * 60 * 60) % 24) : '0' + Math.floor(t / (1000 * 60 * 60) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function update_remain_sale_time() {
    var time = getTimeRemaining('Sat, 06 May 2017 23:59:59 +0300');
    var html = '';
    if (time.total > 0) {
      var tmp = [];
      if (time.hours > 0) {
        tmp.push(time.hours);
        tmp.push(time.minutes);
        tmp.push(time.seconds);
      } else if (time.minutes > 0) {
        tmp.push(time.minutes);
        tmp.push(time.seconds);
      } else if (time.seconds > 0) {
        tmp.push(time.seconds);
      }
      html = tmp.join(':');
    }
    $('#remain_sale_time').html("До конца акции <span class='bold'>" + html + "</span>");
  }

  function run_update_remain_sale_time() {
    update_remain_sale_time();
    setTimeout(run_update_remain_sale_time, 1000);
  }
  $(document).ready(function() {
    run_update_remain_sale_time();
  });
