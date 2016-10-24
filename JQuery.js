/* Auto scroll når en trykker på meny */

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500); // Justere scroll hastighet her, i millisek
                return false;
            }
        }

    });
});


/* Gjem header/meny linje i mobilvisning, når en scroller nedover */
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();


$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

/* fiks resize problem, når en toggler mellom vindu størrelse på pc */
$(window).resize(function (event) {
    $('header').addClass('nav-down');
});

/* Bytte bakgrunns farge når en scroller i desktop mode */
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#startchange'); /* Start id-tag, må være en <p>,<div>,<section> (?) */
    var offset = startchange.offset();
    $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset.top) {
            /*  $('header').css('background-color', 'opacity: 0.8'); */ /* Markert ut, er for visst en ønsker farge */
            $('header').addClass('opacity'); /* addClass */
        } else {
            $('header').css('background-color', 'black'); /* bakgrunnsfarge på navbar når en scroller */
            $('header').removeClass('opacity'); /* add og remove class fjerner opacity */
        }
    });
});

