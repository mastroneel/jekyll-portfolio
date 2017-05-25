// *********************
// Nav dropdown + toggle
// *********************

(function($) {
  $(function() {
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    $('#nav-toggle').click(function() {
      this.classList.toggle('active');
    });
  });
})(jQuery);


// ********************
// Shrink nav on scroll
// ********************

$(function(){
    $('.navigation').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('.navigation').data('size') == 'big')
        {
            $('.navigation').data('size','small');
            $('.navigation').stop().animate({
                height: '55px',
                lineHeight: '35px'
            },100);
            $('.nav-list').css({
              lineHeight: '55px'
            });
            $('.logo a').css({
              color: '#262626',
              fontSize: '30px',
            });
            $('.navigation').css('background-color', 'rgba(255, 255, 255, 1)');
            $('nav ul li a').css('color', '#262626');
        }
    }
    else
    {
        if($('.navigation').data('size') == 'small')
        {
            $('.navigation').data('size','big');
            $('.navigation').stop().animate({
                height: '85px',
                lineHeight: '85px'
            },100);
            $('.nav-list').css({
              lineHeight: '85px'
            }, 100);
            $('.logo a').css({
              color: '#fff',
              fontSize: '50px'
            }, 100);
            $('.navigation').css({backgroundColor: 'rgba(0, 0, 0, 0.2)'}, 100);
            $('nav ul li a').css({color: '#fff'}, 100);
        }
    }
});


// $(document).ready(function(){
//             var scroll_pos = 0;
//             $(document).scroll(function() {
//                 scroll_pos = $(this).scrollTop();
//                 if(scroll_pos > 2) {
//                     $('.navigation').css('background-color', 'rgba(255, 255, 255, 1)');
//                     $('nav ul li a').css('color', '#262626');
//                     $('nav ul li a:visited').css('color', '#262626');
//                     // $('.logo a').css({
//                     //   color: '#262626',
//                     //   fontSize: '30px',
//                     // });
//                 } else {
//                     $('.navigation').css('background-color', 'rgba(0, 0, 0, 0.2)');
//                     $('nav ul li a').css('color', '#fff');
//                     $('nav ul li a:visited').css('color', '#fff');
//                     // $('.logo a').css({
//                     //   color: '#fff',
//                     //   fontSize: '50px'
//                     // });
//                 }
//             });
//         });
