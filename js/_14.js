
  $(document).ready(function() {
    $('#products_hit ul').carouFredSel({
      circular: true,
      infinite: true,
      auto: true,
      responsive: false,
      width: 889,
      prev: {
        button: '#products_hit .arr-l'
      },
      next: {
        button: '#products_hit .arr-r'
      },
      items: {
        visible: 4
      },
      scroll: {
        items: 4,
        easing: "swing",
        duration: 1000,
        pauseOnHover: true
      },
    });
    var big_slider = ['#products_new', '#products_bonuses', '#products_look'];
    big_slider.forEach(function(sl) {
      var sl_in = sl;
      if (sl_in) {
        $(sl + ' ul').carouFredSel({
          circular: true,
          infinite: true,
          auto: true,
          responsive: false,
          width: 1150,
          prev: {
            button: sl + ' .arr-l'
          },
          next: {
            button: sl + ' .arr-r'
          },
          items: {
            visible: 5
          },
          scroll: {
            items: 5,
            easing: "swing",
            duration: 1000,
            pauseOnHover: true
          },
        });
      }
    });
    $('.product_index_list ul').find('.images_slide_preview').each(function() {
      var $this = $(this);
      $this.carouFredSel({
        circular: true,
        infinite: true,
        auto: 1000,
        responsive: true,
        items: {
          visible: 1,
          filter: 'span'
        },
        scroll: {
          fx: "crossfade",
          easing: "linear",
          duration: 500,
        },
      });
      $this.trigger("pause");
      $this.mouseleave(function() {
        setTimeout(function() {
          $this.trigger("slideTo", 0);
        }, 1000);
        $this.trigger("pause");
      }).mouseenter(function() {
        $this.trigger("resume");
      })
    });
  });
