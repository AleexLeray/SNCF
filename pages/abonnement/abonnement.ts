(function () {
  'use strict';
    const cards: NodeList = document.querySelectorAll('.card');
    const toggleElement: Element = document.querySelector('.icon-2x');

    const toggle = function (event: MouseEvent): void {
      const target: EventTarget = event.target;
      if (target instanceof HTMLSpanElement) {
        if (target.className === 'icon-toggle-off icon-2x') {
          target.className = 'icon-toggle-on icon-2x';
        } else {
          target.className = 'icon-toggle-off icon-2x';
        }
      }
    };

    const selectCard = function (): void {
      if (this instanceof HTMLDivElement) {
        for (let i = 2; i >= 0; i -= 1) {
	  const currentCard: HTMLDivElement = <HTMLDivElement> cards[i];
          const currentBackgroundColor: string = getComputedStyle(currentCard, null).getPropertyValue("background-color");
	  const currentClasses: string = currentCard.className;
	  currentCard.className = currentClasses.replace(/(box-shadowed)/, '');
	  currentCard.style.backgroundColor = currentBackgroundColor.replace(/(\d\.\d+)/, '0.52');
        }
          const currentBackgroundColor: string = getComputedStyle(this, null).getPropertyValue("background-color");
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
  toggleElement.addEventListener('click', toggle);
})();
