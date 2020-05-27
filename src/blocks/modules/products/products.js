import $ from "jquery";
import 'owl.carousel';

$(document).ready(function () {
    $(".owl-products").owlCarousel({
        loop: true,
        margin: 28,
        nav: true,
        navText : [""],
        responsive:{
            0:{
                items:1
            },
            576: {
                items: 2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });
});