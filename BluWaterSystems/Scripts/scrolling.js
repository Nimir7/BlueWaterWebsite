

$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    // add Bootstrap's scrollspy
    $('body').scrollspy({
        target: '.navbar'
    });

     //smooth scrolling
    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top -10
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // parallax scrollig with stellar.js
    //$(window).stellar();

    // initialize WOW for element animation
    new WOW().init();

    // initialize nanoGallary
    //$(document).ready(function () {
    //    $("#nanoGallery3").nanoGallery();
    //});

    // test
    //$('a[href*="#"]:not([href="#"])').click(function () {
    //    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //        var target = $(this.hash);
    //        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //        if (target.length) {
    //            $('html, body').animate({
    //                scrollTop: target.offset().top - 83
    //            }, 1000);
    //            return false;
    //        }
    //    }
    //});

    //$(document).on("pageload", function () {
    //    alert("pageload event fired!");
    //});

});