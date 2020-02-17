/*global $, alert, console*/

$(function () {

    'use strict';

    // Links Add Active Class

    $('.nav li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    // Carousel

    $('.carousel').carousel({
        interval: 2000
    });

    // LogIn Form PopUp

    $(".popup-login").click(function () {

        $("#login-popup").fadeIn();

        $('.popup').css('background-color', 'rgba(0, 0, 0, .9)');

        $('.popup').css('width', '100%');

        $('.popup').css('height', '100%');

    });

    // LogIn Form Close

    $(".return").click(function () {

        $("#login-popup").fadeOut();

    });

    // Register Form PopUp

    $(".popup-register").click(function () {

        $("#register-popup").fadeIn();

        $('.popup').css('background-color', 'rgba(0, 0, 0, .9)');

        $('.popup').css('width', '100%');

        $('.popup').css('height', '100%');

    });

    // Register Form Close

    $(".return").click(function () {

        $("#register-popup").fadeOut();

    });

    // Scroll To Top Button 

    var scrollButton = $("#scroll-top");

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 400) {

            scrollButton.fadeIn(500);

        } else {

            scrollButton.fadeOut(500);

        }

    });

    scrollButton.click(function () {

        $("html, body").animate({
            scrollTop: 0
        }, 600);

    });


    // Nice Scroll 

    $("html").niceScroll({

        cursorcolor: '#07D9F0',

        cursorborder: '1px solid #07D9F0',

        cursorwidth: '6px',

        zindex: '999999',

        scrollspeed: '80'

    });

});