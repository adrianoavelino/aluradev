(function(){
  const codeCards = Array.from(document.querySelectorAll('.card__code'));

  codeCards.forEach(element => {
    hljs.highlightBlock(element);  
  });
})();
