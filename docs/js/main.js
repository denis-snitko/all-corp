$(document).ready(function () {
    $('.hero-slider').slick({

        dots: true,

    });

    $(".menu__link").on("click", function () {

        $(this).next().slideToggle();
        $(this).parent().siblings().children().next().slideUp();

    });

    $(".products-row").owlCarousel({
        loop: true,
        margin: 28,
        nav: true,
        navText: [""],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
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

    let triggerTitle = $('[data="item__title"]'); //Выбираем

    triggerTitle.on('click', function () {
        $(this).next().slideToggle();

        $(this).addClass('footer-content__item-title--active');

        triggerTitle.not(this).removeClass('footer-content__item-title--active');

        triggerTitle.not(this).next().slideUp();
    })
});


