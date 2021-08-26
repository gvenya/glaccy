'use strict';
(function () {
  const promoImgs = document.querySelectorAll('.promo__img');

  for (let i = 0; i < promoImgs.length; i += 1) {
    promoImgs[i].classList.add('promo__img--js');
  }
})();
