function showAccordion(targetAccordionId, otherAccordionId, activeButtonId, inactiveButtonId) {
    // Hide the other accordion and show the target accordion
    document.getElementById(otherAccordionId).classList.add('d-none');
    document.getElementById(targetAccordionId).classList.remove('d-none');

    // Update button styles
    const activeButton = document.getElementById(activeButtonId);
    const inactiveButton = document.getElementById(inactiveButtonId);
    activeButton.classList.add('btn-warning');
    activeButton.classList.remove('btn-secondary');
    inactiveButton.classList.add('btn-secondary');
    inactiveButton.classList.remove('btn-warning');

    // Collapse all accordion items in the displayed accordion
    collapseAllAccordionItems(targetAccordionId);
  }

  function collapseAllAccordionItems(accordionId) {
    const accordion = document.getElementById(accordionId);
    const items = accordion.querySelectorAll('.accordion-item');

    items.forEach((item) => {
      const button = item.querySelector('.accordion-button');
      const collapse = item.querySelector('.accordion-collapse');

      button.classList.add('collapsed');
      button.setAttribute('aria-expanded', 'false');
      collapse.classList.remove('show');
    });
  }

  // Add event listeners for buttons
  document.getElementById('show2025').addEventListener('click', function () {
    showAccordion('accordion2025', 'accordion2024', 'show2025', 'show2024');
  });

  document.getElementById('show2024').addEventListener('click', function () {
    showAccordion('accordion2024', 'accordion2025', 'show2024', 'show2025');
  });

  // Ensure only one accordion item is expanded at a time
  function handleAccordionToggle(accordionId) {
    const accordion = document.getElementById(accordionId);
    const items = accordion.querySelectorAll('.accordion-item');

    items.forEach((item) => {
      const button = item.querySelector('.accordion-button');
      const collapse = item.querySelector('.accordion-collapse');

      button.addEventListener('click', () => {
        // Collapse all other items
        items.forEach((otherItem) => {
          if (otherItem !== item) {
            const otherButton = otherItem.querySelector('.accordion-button');
            const otherCollapse = otherItem.querySelector('.accordion-collapse');
            otherButton.classList.add('collapsed');
            otherButton.setAttribute('aria-expanded', 'false');
            otherCollapse.classList.remove('show');
          }
        });
      });
    });
  }

  // Apply the toggle handler to both accordions
  handleAccordionToggle('accordion2025');
  handleAccordionToggle('accordion2024');

  // Initial state: show 2025 rides without expanding any item
  document.getElementById('accordion2025').classList.remove('d-none');
  document.getElementById('accordion2024').classList.add('d-none');
  collapseAllAccordionItems('accordion2025');
