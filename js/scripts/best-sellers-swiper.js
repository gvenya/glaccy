'use strict';
(function () {
  if (document.querySelector('.best-sellers')) {
    var swiperBestSellers = new Swiper('.best-sellers', {
      spaceBetween: 27,//44,//0,
      /*
      pagination: {
        el: '.promo__pagination',
        type: 'bullets',
        clickable: true,
      },
      */
      slidesPerView: 4,
      breakpoints: {
        1199: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        899: {
          slidesPerView: 2,
          //spaceBetween: 0,
        },
        599: {
          slidesPerView: 1
        }
      },
      loop: true,

      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      

      noSlideToSlideTabNav: true,
    });


  }
})();
