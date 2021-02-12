$(document).ready(function () {
  // FONDO NAVBAR
  /*
  $(window).scroll(function () {
    if ($('.navbar').offset().top > 100) {
      $('.navbar').addClass('fondo')
      $('.nav-link').removeClass('font2')
      $('.nav-link').addClass('font1')
      
      
      
    } else {
      $('.navbar').removeClass('fondo')
      $('.nav-link').removeClass('font1')
      $('.nav-link').addClass('font2')
    }
  })*/
})

const element = document.querySelector('.icon-down');
element.classList.add('animate__animated', 'animate__slideInDown', 'animate__infinite',	'infinite', 'animate__slower');


/*CAROUSEL */
$(document).ready(function () {
  $("#myCarousel").on("slide.bs.carousel", function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i = 0; i < it; i++) {
              // append slides to end
              if (e.direction == "left") {
                  $(".carousel-item")
                      .eq(i)
                      .appendTo(".carousel-inner");
              } else {
                  $(".carousel-item")
                      .eq(0)
                      .appendTo($(this).find(".carousel-inner"));
              }
          }
      }
  });
});


