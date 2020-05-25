import $ from "jquery";

let triggerTitle = $('[data="item__title"]'); //Выбираем

triggerTitle.on('click', function () {
    $(this).next().slideToggle();

    $(this).addClass('footer-content__item-title--active');

    triggerTitle.not(this).removeClass('footer-content__item-title--active');
    
    triggerTitle.not(this).next().slideUp();
})