$(document).ready(function () {
    $('.hero-slider').slick({

        dots: true,

    });

    $(".menu__link").on("click", function () {

        $(this).next().slideToggle();
        $(this).parent().siblings().children().next().slideUp();

    });

    $(".reviews-slider").owlCarousel({
        loop: true,
        margin: 28,
        nav: true,
        navText: [""],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });
});


