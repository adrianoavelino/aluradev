(function(){

  const $button = document.querySelector('.hamburger');
  const $navbar = document.querySelector('.navbar');
  const $hamburger = document.querySelector('.hamburger img');
  const $language = document.querySelector('[data-js=project__language]');
  const $code = document.querySelector('[data-js=editor__code]');
  const $EditorBackground = document.querySelector('[data-js=editor]');
  const $buttonPreview = document.querySelector('.button-preview');
  const $color = document.querySelector('[data-js=project__color]');
  const srcIconNavbarClose = './assets/img/navbar-close-icon.svg';
  const srcIconNavbarOpen = './assets/img/navbar-open-icon.svg';
  let lastLanguage = $language.value;

  $button.addEventListener('click', function() {
    console.log('click');
    $navbar.classList.toggle('navbar--visible');
    changeIconNavBarMobile();
  });
  
  function changeIconNavBarMobile() {
    $hamburger.src = (isOpenMobileNavbar())? srcIconNavbarClose : srcIconNavbarOpen;
  }
  
  function isOpenMobileNavbar() {
    return !!document.querySelector('img[src*="open"]');
  }

  $language.addEventListener('change', function() {
    updateEditorLanguage();
  });

  function updateEditorLanguage() {
    $code.classList.remove(lastLanguage);
    if (lastLanguage == 'html') $code.classList.remove('xml');
    const language = $language.value;
    $code.classList.add(language);
    lastLanguage = $language.value;
  }

  $buttonPreview.addEventListener('click', function() {
    hljs.highlightBlock($code);
  });

  $color.addEventListener('input', function() {
    $EditorBackground.style.backgroundColor = $color.value;
  });

})();

