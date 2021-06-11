(function(){
  $cards = document.querySelector('[data-js=cards]');
 
  if(localStorage.length > 0) {
    loadCards();
  }

  function loadCards() {
    let cards = '';
    let card;

    for (let i = 1; i <= localStorage.length; i++) {
      card = JSON.parse(localStorage.getItem(i));
      console.log(card);
      cards += createCard(card);
      
    }

    $cards.innerHTML = cards;
  }

  function createCard(cardJson) {
    return `
    <section class="card">
      <div class="card__body" style="background-color:${cardJson.color}">
        <section class="buttons">
          <svg class="buttons__icon buttons__icon--primary" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="6"/>
          </svg>
          <svg class="buttons__icon buttons__icon--secondary" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="6"/>
          </svg>
          <svg class="buttons__icon buttons__icon--third" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="6"/>
          </svg>
        </section>
        <code class="card__code ${cardJson.language} hljs" data-js="card__code" aria-label="card">
          ${cardJson.code}
        </code>
      </div>
      <footer>
        <p class="card__project-name">${cardJson.name}</p>
        <p class="card__project-description">${cardJson.description}</p>
      </footer>
    </section>
    `;
  }

  const codeCards = Array.from(document.querySelectorAll('.card__code'));

  codeCards.forEach(element => {
    hljs.highlightBlock(element);  
  });
})();
