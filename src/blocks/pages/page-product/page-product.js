$(function () {
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
});