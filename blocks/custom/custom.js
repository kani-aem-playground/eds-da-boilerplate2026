// Custom block JavaScript
// Location: blocks/custom/custom.js

// Lightweight initializer for the custom block
(function () {
  'use strict';

  function initCustomBlock(block) {
    // Example behavior: toggle an "is-active" class when any element
    // with data-action="toggle" inside the block is clicked.
    const toggles = block.querySelectorAll('[data-action="toggle"]');
    toggles.forEach(btn => {
      btn.addEventListener('click', () => {
        block.classList.toggle('is-active');
      });
    });
  }

  // Initialize all existing and future custom blocks on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.block--custom');
    blocks.forEach(initCustomBlock);
  });
})();
