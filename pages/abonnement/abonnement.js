(function () {
    'use strict';
    const cards = document.querySelectorAll('.card');
    const toggleElement = document.querySelector('.icon-2x');
    const toggle = function (event) {
        const target = event.target;
        if (target instanceof HTMLSpanElement) {
            if (target.className === 'icon-toggle-off icon-2x') {
                target.className = 'icon-toggle-on icon-2x';
            }
            else {
                target.className = 'icon-toggle-off icon-2x';
            }
        }
    };
    const selectCard = function () {
        if (this instanceof HTMLDivElement) {
            const currentBackgroundColor = getComputedStyle(this, null).getPropertyValue("background-color");
            this.style.backgroundColor = currentBackgroundColor.replace(/(\d\.\d+)/, '0.72');
        }
    };
    const addEventsToNodeList = function (nodeList, index) {
        index -= 1;
        if (index >= 0) {
            nodeList[index].addEventListener('click', selectCard);
            addEventsToNodeList(nodeList, index);
        }
    };
    addEventsToNodeList(cards, cards.length);
    toggleElement.addEventListener('click', toggle);
})();
