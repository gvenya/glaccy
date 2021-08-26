'use strict';
(function () {
  const pageHeader = document.querySelector('.page-header');

  if (pageHeader.nextElementSibling.classList.contains('promo')) {
    pageHeader.classList.add('page-header--js');
  }


  //if (document.querySelector('.page-header')) {}

})();
