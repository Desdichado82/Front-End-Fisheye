const formElements = Array.from(document.querySelectorAll('#contact_modal input, #contact_modal textarea, #contact_modal button'));

let currentIndex = 0;

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
    const modal = document.getElementById('contact_modal');
    const activeElement = document.activeElement;
    const isTabPressed = event.key === 'Tab' || event.keyCode === 9;
  
    if (modal.style.display === 'block') {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          navigateFormElements('previous');
          break;
        case 'ArrowRight':
          event.preventDefault();
          navigateFormElements('next');
          break;
        case 'Escape':
          event.preventDefault();
          closeContactForm();
          break;
        case 'Tab':
          if (!modal.contains(activeElement)) {
            event.preventDefault();
            focusFirstElement();
          } else if (isTabPressed) {
            handleTabKey(event);
          }
          break;
        default:
          break;
      }
    }
  }
  
  function handleTabKey(event) {
    const focusableElements = getFocusableElements();
  
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
  
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
  
  const getFocusableElements = () => {
    const modal = document.getElementById('contact_modal');
    return Array.from(modal.querySelectorAll('input, textarea, button'));
  }
  

function navigateFormElements(direction) {
  const nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

  if (nextIndex >= 0 && nextIndex < formElements.length) {
    currentIndex = nextIndex;
    formElements[currentIndex].focus();
  }
}

const closeContactForm = () => {
    const modal = document.getElementById('contact_modal');
    const contactButton = document.querySelector('.contact_button');
  
    modal.style.display = 'none';
  
    contactButton.focus();
}

const focusFirstElement = () => {
  const firstElement = formElements[0];
  if (firstElement) {
    firstElement.focus();
  }
}


/*
It starts by selecting all form elements within the contact modal using document.querySelectorAll('#contact_modal input, #contact_modal textarea, #contact_modal button'). The selected elements are stored in the formElements array.
The currentIndex variable keeps track of the currently focused element within the form.
The handleKeyDown function is bound to the keydown event listener on the document. It listens for specific key presses and performs corresponding actions based on the active state of the contact modal.
When the contact modal is active (modal.style.display === 'block'), the function checks for different key presses. For example, if the 'ArrowLeft' key is pressed, it prevents the default behavior, and then calls the navigateFormElements function with the 'previous' direction to move focus to the previous form element.
The handleTabKey function handles the tab key press and manages focus wrapping within the contact modal. It prevents the default tab behavior and focuses on the appropriate element (either the first or last focusable element) based on the shift key state.
The getFocusableElements function retrieves all focusable elements within the contact modal by querying the modal's DOM elements for input, textarea, and button elements.
The navigateFormElements function receives a direction ('next' or 'previous') and updates the currentIndex accordingly. It checks if the next index is within the valid range and focuses on the corresponding form element.
The closeForm function is called when the contact modal is closed. It hides the modal, sets focus on the contact button, and removes focus from the modal elements.
The focusFirstElement function focuses on the first element in the formElements array if it exists.
In summary, this code ensures keyboard accessibility within the contact modal by managing focus, handling key navigation, and implementing tab focus wrapping. It allows users to navigate through the form elements using arrow keys, close the modal with the escape key, and ensures proper tab order within the modal.
*/