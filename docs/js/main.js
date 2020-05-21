$('.hero-slider').slick({
    
    dots: true,
  
  });




    $(".menu__link").on("click", function () {

        $(this).next().slideToggle();
        $(this).parent().siblings().children().next().slideUp();

    });


