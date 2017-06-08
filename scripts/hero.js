// Darken hero on scroll
$(function () {
    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();
        $('.blackOverlay').css('opacity',currentScrollTop/$('.blackOverlay').height());

    });
});
