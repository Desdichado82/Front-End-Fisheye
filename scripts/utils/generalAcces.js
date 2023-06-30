document.addEventListener('keydown', handleArrowKeys);

function handleArrowKeys(event) {
  const focusableElements = getFocusableElements();
  const currentIndex = focusableElements.indexOf(document.activeElement);
  let nextIndex;

  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
      break;
    case 'ArrowDown':
      event.preventDefault();
      nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
      break;
    case 'ArrowLeft':
      event.preventDefault();
      nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
      break;
    case 'ArrowRight':
      event.preventDefault();
      nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
      break;
    default:
      return;
  }

  focusableElements[nextIndex].focus();
}

function getFocusableElements() {
  const focusableElements = Array.from(document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'));
  return focusableElements.filter(element => !element.disabled);
}
