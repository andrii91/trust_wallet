$(document).ready(function () {
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });



  $("#calculator_input_usd").ionRangeSlider({
    skin: "round",
    grid: false,
    hide_min_max: true,
    hide_from_to: true,
    min: 0,
    max: 50000,
    from: 1000
  });
  
  
    function usd_calc() {
        var usd_sum = Number($('#calculator_input_usd').val());
        var amount = 0;
        var in_day = $('#day_usd');
        var in_month = $('#month_usd');
        var in_end = $('#year_usd');

        if (usd_sum <= 4999) {
            amount = usd_sum * 0.07;
        } else if (usd_sum >= 5000 && usd_sum <= 9999) {
            amount = usd_sum * 0.08;
        } else {
            amount = usd_sum * 0.1;
        }

        in_day.val((amount /  new Date(new Date().getFullYear(), new Date().getMonth()-1, 0).getDate()).toFixed(2));
        in_month.val(amount.toFixed(2));
        in_end.val((amount * 12).toFixed(2));
      

    }
  
  var calculator_input_usd = Number($('#calculator_input_usd').val());
  
  $('#calc_val_usd').val(calculator_input_usd);
    /*Считает сколько $ девиденты*/
   
usd_calc();
  

  $("#calculator_input_usd").change(function () {
    var $from = $(this);
    calculator_input_usd = Number($from.val());
    $('#calc_val_usd').val(calculator_input_usd);
    /*Считает сколько $ девиденты*/
    usd_calc();



  })

  $("#calc_val_usd").change(function () {
    var $from = $(this);
    var calc_val_usd = Number($from.val());

    var sliderOne = $("#calculator_input_usd").data("ionRangeSlider");

    sliderOne.update({
      from: calc_val_usd
    });
  })

/*=================================================*/

  $("#calculator_input_btc").ionRangeSlider({
    skin: "round",
    grid: false,
    hide_min_max: true,
    hide_from_to: true,
    min: 0.1,
    step: 0.1,
    max: 5,
    from: 0.1
  });
  
      function btc_calc() {
        var btc_sum =  Number($('#calculator_input_btc').val());
        var amount = 0;
        var in_day = $('#day_btc');
        var in_month = $('#month_btc');
        var in_end = $('#year_btc');

        // console.log(amount);

        if (btc_sum > 0 && btc_sum < 1) {
            amount = btc_sum * 0.4
        }
        else if (btc_sum >= 1 && btc_sum < 2) {
            amount = btc_sum * 0.45
        }
        else if (btc_sum >= 2) {
            amount = btc_sum * 0.5
        }
        else {
            amount = 0
        }

        // console.log(amount);
        in_day.val((amount/365).toFixed(5));
        in_month.val((amount/365*new Date(new Date().getFullYear(), new Date().getMonth()-1, 0).getDate()).toFixed(5));
        in_end.val((amount).toFixed(5));

        // console.log(moment().dayOfYear());
    }

    btc_calc();
  
  var calculator_input_btc = Number($('#calculator_input_btc').val());
  $('#calc_val_btc').val(calculator_input_btc);

  $("#calculator_input_btc").change(function () {
    var $from = $(this);
    calculator_input_btc = Number($from.val());
    $('#calc_val_btc').val(calculator_input_btc);
    btc_calc();


  })

  $("#calc_val_btc").change(function () {
    var $from = $(this);
    var calc_val_btc = Number($from.val());

    var slider2 = $("#calculator_input_btc").data("ionRangeSlider");

    slider2.update({
      from: calc_val_btc
    });
  })
  
  
  $('.calculator-link a').click(function(e){
    e.preventDefault();
    console.log($(this).attr('href'));
    $('.calculator-link a').removeClass('active');
    $(this).addClass('active');
    
    $('.calculator-dividends').removeClass('active');
    $($(this).attr('href')).addClass('active');
    
    $('.dividends-item').removeClass('active');
    $("[data-href='"+$(this).attr('href')+"']").addClass('active');
  })
  
    $('.play-btn').click(function () {
    var $from = $(this);
    var imgWidth = $from.parents('.about-video').find('img').width();
    var imgHeight = $from.parents('.about-video').find('img').height();
    $from.parents('.about-video').find('img').hide();
    $from.hide();

    $from.parents('.about-video').append('<iframe width="' + imgWidth + '" height="' + imgHeight + '" src="https://www.youtube.com/embed/' + $from.parents(".about-video").data("id") + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  });
  
  $('.faq-item .top').click(function(){
    $(this).toggleClass('active');
    $(this).parent().find('.content').slideToggle(300);
  })
  
  
    $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 40
    }, 1500);

  });

  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('.menu, .login').slideToggle(200);
  });
  
  $('.lang').click(function(e){
    e.preventDefault();
    $('.lang-list').slideToggle(200);
  })

  
});