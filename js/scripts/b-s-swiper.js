'use strict';
(function () {
  if (document.querySelector('.b-s__wrap')) {
    document.querySelector('.b-s__list').classList.remove('b-s__list--nojs');
    document.querySelector('.b-s').classList.remove('b-s--nojs');
    const devWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // devWidth < 480px:
    /*const swiperBanner = new Swiper('.b-s__wrap', {
      spaceBetween: 20,
      slidesPerView: 1,//'auto',//2,//'auto',//2,//'auto',
      centeredSlides: true,//false,//true,//false,//true,
      loop: true,//false, --> true is OK when there are at least 3 slides
      autoplay: {
        delay: 3300,
        disableOnInteraction: false,
      },
    });*/

    // width < 900px:
    /* const swiperBanner = new Swiper('.b-s__wrap', {
      spaceBetween: 20,
      slidesPerView: 'auto',//2,//'auto',//2,//'auto',
      centeredSlides: true,//false,//true,//false,//true,
      loop: false,//false, --> true is OK when there are at least 3 slides
      autoplay: false,
    });*/


    // width >= 900:
    /*
    const swiperBanner = new Swiper('.b-s__wrap', {
      spaceBetween: 20,
      slidesPerView: 2,//2,//'auto',//2,//'auto',
      centeredSlides: false,//false,//true,//false,//true,
      loop: false,//false, --> true is OK when there are at least 3 slides
      autoplay: {
        delay: 3300,
        disableOnInteraction: false,
      },
    });*/

    const swiperPromo = new Swiper('.b-s__wra', {
      spaceBetween: 20,
      slidesPerView: 2,//2,//'auto',//2,//'auto',
      centeredSlides: false,//false,//true,//false,//true,
      loop: false,//false, --> true is OK when there are at least 3 slides
      // autoplay.enabled: true,
      speed: 900,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      breakpoints: {
        479: {
          spaceBetween: 0,
          slidesPerView: 'auto',//1,//2,//'auto',//2,//'auto',
          centeredSlides: true, //true,
          loop: false,
          /*
          autoplay: {
            enabled: true,
            delay: 2300,
            disableOnInteraction: true,
          }*/
        },
        899: {
          spaceBetween: 20,
          slidesPerView: 'auto',
          centeredSlides: true,
          loop: false,
          /*
          autoplay: {
            enabled: false,
          }
          */
        },
      },
    });

    window.addEventListener('resize', function () {
      
    });

  /*
    window.addEventListener('resize', function () {
      const devWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (devWidth < 480) {
        swiperPromo = new Swiper('.b-s__wrap', {
          spaceBetween: 20,
          slidesPerView: 'auto',
          centeredSlides: false,
          loop: true,
          autoplay: {
            enabled: true,
            delay: 2000,
            disableOnInteraction: false,
          }
        });
      }

      if (devWidth >= 480 && devWidth < 900) {
        swiperPromo = new Swiper('.b-s__wrap', {
          spaceBetween: 20,
          slidesPerView: 'auto',
          centeredSlides: true,
          loop: false,
          autoplay: {
            enabled: false,
          }
        });
      }

      if (devWidth >= 900) {
        swiperPromo = new Swiper('.b-s__wrap', {
          spaceBetween: 20,
          slidesPerView: 2,
          centeredSlides: false,
        });
      }
    });
  */
  }
})();




/*

if (devWidth < 480) {
        swiperPromo = new Swiper('.b-s__wrap', {
          spaceBetween: 20,
          slidesPerView: 2,//2,//'auto',//2,//'auto',
          centeredSlides: false,//false,//true,//false,//true,
          loop: false,
          autoplay: {
            enabled: true,
            delay: 2000,
            disableOnInteraction: false,
          }
      });
    }
*/
