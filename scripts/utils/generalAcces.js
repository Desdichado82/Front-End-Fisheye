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

/*
This code adds an event listener to the document that listens for keydown events. When an arrow key (ArrowUp, ArrowDown, ArrowLeft, or ArrowRight) is pressed, the handleArrowKeys function is called.

Inside the handleArrowKeys function:

It retrieves an array of focusable elements on the page using the getFocusableElements function.
It determines the index of the currently focused element within the focusable elements array.
Based on the arrow key pressed, it calculates the index of the next element to focus.
It prevents the default behavior of the arrow key (e.g., scrolling the page).
It uses the focus method to set focus on the next element in the focusable elements array.
The getFocusableElements function retrieves all the elements on the page that can receive focus, such as links (<a>), buttons, inputs, selects, textareas, and elements with a tabindex attribute that is not -1. It filters out disabled elements.

In summary, this code enables keyboard navigation using arrow keys among focusable elements on the page. It allows users to navigate through interactive elements without needing to use a mouse, improving accessibility and user experience.
*/