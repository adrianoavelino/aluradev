(function(){

  const $button = document.querySelector('.hamburger');
  const $navbar = document.querySelector('.navbar');
  const $hamburger = document.querySelector('.hamburger img');
  const srcIconNavbarClose = './assets/img/navbar-close-icon.svg';
  const srcIconNavbarOpen = './assets/img/navbar-open-icon.svg';

  $button.addEventListener('click', function() {
    $navbar.classList.toggle('navbar--visible');
    changeIconNavBarMobile();
  });
  
  function changeIconNavBarMobile() {
    $hamburger.src = (isOpenMobileNavbar())? srcIconNavbarClose : srcIconNavbarOpen;
  }
  
  function isOpenMobileNavbar() {
    return !!document.querySelector('img[src*="open"]');
  }

})();

