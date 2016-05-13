(function () {
  'use strict';
  const cards = document.querySelectorAll('.card');
  const cardsPrice = document.querySelectorAll('.card__price');
  const toggles = document.querySelectorAll('.toggle__element');
  const toggle = function (event) {
    const target = event.target;
    if (target instanceof HTMLSpanElement) {
      let colorToggleOn;
      switch (target.id) {
      case 'toggle_offer':
        colorToggleOn = 'icon-toggle-on--cornflowerblue';
        break;
      default:
        colorToggleOn = '';
        break;
      }
      let changePrice;
      if (/(-off)/.test(target.className) === true) {
        target.className = `${target.className.replace(/(-off)/, '-on')} ${colorToggleOn}`;
        changePrice = 21.10;
      }
      else {
        target.className = 'icon-toggle-off icon-2x toggle__element';
        changePrice = -21.10;
      }
      if (target.id !== 'toggle_offer') {
        for (let i = 2; i >= 0; i -= 1) {
          if (cardsPrice[i] instanceof HTMLParagraphElement) {
            const currentPrice = parseFloat(cardsPrice[i].textContent.match(/(\d+\.\d+)/)[0]);
            const newPrice = currentPrice + changePrice;
            cardsPrice[i].textContent = cardsPrice[i].textContent.replace(/(\d+\.\d+)/, newPrice.toFixed(2));
          }
        }
      }
    }
  };
  const selectCard = function () {
    if (this instanceof HTMLDivElement) {
      for (let i = 2; i >= 0; i -= 1) {
        const currentCard = cards[i];
        const currentBackgroundColor = getComputedStyle(currentCard, null).getPropertyValue('background-color');
        const currentClasses = currentCard.className;
        currentCard.className = currentClasses.replace(/(box-shadowed)/, '');
        currentCard.style.backgroundColor = currentBackgroundColor.replace(/(\d\.\d+)/, '0.52');
      }
      const currentBackgroundColor = getComputedStyle(this, null).getPropertyValue('background-color');
      this.style.backgroundColor = currentBackgroundColor.replace(/(\d\.\d+)/, '0.99');
      this.className = `${this.className} box-shadowed`;
    }
  };
  const addEventsToNodeList = function (nodeList, index, type, listener) {
    index -= 1;
    if (index >= 0) {
      nodeList[index].addEventListener(type, listener);
      addEventsToNodeList(nodeList, index, type, listener);
    }
  };
  addEventsToNodeList(cards, cards.length, 'click', selectCard);
  addEventsToNodeList(toggles, toggles.length, 'click', toggle);
})();
