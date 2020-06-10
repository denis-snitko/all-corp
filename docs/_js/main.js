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

    $('.burger-menu__burger-line').on('click', () => {
        $('.burger-menu__container').toggleClass('show-burger');
    });

    $('.burger-menu__close').on('click', () => {
        $('.burger-menu__container').toggleClass('show-burger');
    });

    $('.tabs.product-card__tabs').on('click', '.tabs__title-item', function () {

        const tabs = $('.tabs.product-card__tabs .tabs__title-item'),
            tabContent = $('.tabs.product-card__tabs .tabs__row');

        //Удаляем классы  
        tabs.removeClass('tabs__title-item--active');
        tabContent.removeClass('active');

        //Добавляем классы 
        $(this).addClass('tabs__title-item--active');
        tabContent.eq($(this).index()).addClass('active');

        return false;
    });

    $(".owl-suggestion").owlCarousel({
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

    $(".card__col-4 a").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    $(".card__base-button").click(function () {
        $('.modal-window-overlay').attr('style', 'display: flex');
    })

});


// Modal
const modalWindowOverlay = document.querySelector('.modal-window-overlay');
const modalWindowClose = document.querySelector('.modal-window__close');
const labelText = document.querySelector('.form__name');
const inputText = document.querySelector('.form__row > input');
const labelTel = document.querySelector('.form__tel');
const inputTel = document.querySelector('input[type="tel"]');

modalWindowClose.addEventListener('click', () => {
    modalWindowOverlay.setAttribute('style', 'display: none');
    labelText.classList.remove('label--active');
    inputText.value = '';

    labelTel.classList.remove('label--active');
    inputTel.value = '';

})

labelText.addEventListener('click', () => {
    labelText.classList.add('label--active');
    inputText.focus();
})

inputText.addEventListener('focus', () => {
    labelText.classList.add('label--active');
})


labelTel.addEventListener('click', () => {
    labelTel.classList.add('label--active');
    inputTel.focus();
})

inputTel.addEventListener('focus', () => {
    labelTel.classList.add('label--active');
})


