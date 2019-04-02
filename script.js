$(function(){
  $('.pant').hover(
    function(){
      $(this).find('.text-contents').addClass('text-active');
    },
    function(){
      $(this).find('.text-contents').removeClass('text-active');
    }
  );

  $('.faq-list-item').click(function(){
    var $answer=$(this).find('.answer');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();

      $(this).find('span').text('+');
    }else{
      $answer.addClass('open');
      $answer.slideDown();

      $(this).find('span').text('-');
    }
  });

  $('.slider').slick({
    autoplay:true,
    autoplayspeed:3000,
    dots:true,
  });

  $('.btn').click(function(){
    $('#pants-modal').fadeIn();
  });
  $('#close-modal').click(function(){
    $('#pants-modal').fadeOut();
  });

  $('#pants-types').change(function(){
    var link=$('#pants-types').val();
    $('#enter').attr({href:link});
  });

  $('.menu-icon').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $('.header-right').slideUp();
    } else {
      $(this).addClass("active");
      $('.header-right').slideDown();
    }
    });

  $('.header-right').find('a').click(function(){
      $('.header-right').slideUp();
  });

  $('.header-left h1').click(function(){
    $('html, body').animate({
      'scrollTop':0
    },500);
  });


});
