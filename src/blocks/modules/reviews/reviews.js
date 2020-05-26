import $ from "jquery";
import 'owl.carousel';

$(document).ready(function () {
    $(".reviews-slider").owlCarousel({
        loop: true,
        margin: 28,
        nav: true,
        navText : [""],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
});