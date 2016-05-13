(function () {
  'use strict';
    const cards: NodeList = document.querySelectorAll('.card');
    const cardsPrice: NodeList = document.querySelectorAll('.card__price');
    const toggles: NodeList = document.querySelectorAll('.toggle__element');

    const toggle = function (event: MouseEvent): void {
      const target = event.target;
      if (target instanceof HTMLSpanElement) {
        let colorToggleOn: string;
      	switch (target.id) {
        case 'toggle_offer':
	  colorToggleOn = 'icon-toggle-on--cornflowerblue';
	  break;
	default:
	  colorToggleOn = '';
	  break;
        }
	let changePrice: number;
        if (/(-off)/.test(target.className) === true) {
          target.className = `${target.className.replace(/(-off)/, '-on')} ${colorToggleOn}`;
	  changePrice = 21.10;
        } else {
          target.className = 'icon-toggle-off icon-2x toggle__element';
	  changePrice = -21.10;
        }
	if (target.id !== 'toggle_offer') {
	  for (let i = 2; i >= 0; i -= 1) {
	    if (cardsPrice[i] instanceof HTMLParagraphElement) {
	      const currentPrice: number = parseFloat(cardsPrice[i].textContent.match(/(\d+\.\d+)/)[0]);
	      const newPrice: number = currentPrice + changePrice;
              cardsPrice[i].textContent = cardsPrice[i].textContent.replace(/(\d+\.\d+)/, newPrice.toFixed(2));
	    }
          }
	}
      }
    };

    const selectCard = function (): void {
      if (this instanceof HTMLDivElement) {
        for (let i = 2; i >= 0; i -= 1) {
	  const currentCard: HTMLDivElement = <HTMLDivElement> cards[i];
          const currentBackgroundColor: string = getComputedStyle(currentCard, null).getPropertyValue('background-color');
	  const currentClasses: string = currentCard.className;
	  currentCard.className = currentClasses.replace(/(box-shadowed)/, '');
	  currentCard.style.backgroundColor = currentBackgroundColor.replace(/(\d\.\d+)/, '0.52');
        }
          const currentBackgroundColor: string = getComputedStyle(this, null).getPropertyValue('background-color');
	  this.style.backgroundColor = currentBackgroundColor.replace(/(\d\.\d+)/, '0.99');
	  this.className = `${this.className} box-shadowed`;
      }
    };

    const addEventsToNodeList = function (nodeList: NodeList, index: number, type: string, listener: EventListener): void {
      index -= 1;
      if (index >= 0) {
        nodeList[index].addEventListener(type, listener);
        addEventsToNodeList(nodeList, index, type, listener);
      }
    };
  addEventsToNodeList(cards, cards.length, 'click', selectCard);
  addEventsToNodeList(toggles, toggles.length, 'click', toggle);
})();
