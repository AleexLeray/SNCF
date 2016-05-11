(function () {
  'use strict';
  const toggleElement = document.querySelector('.icon-2x');
  const toggle = function (event) {
    const target = event.target;
    if (target instanceof HTMLSpanElement) {
      if (target.className === 'icon-toggle-off icon-2x') {
        target.className = 'icon-toggle-on icon-2x';
      } else {
        target.className = 'icon-toggle-off icon-2x';
      }
    }
  };
  toggleElement.addEventListener('click', toggle);
})();
