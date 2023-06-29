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
          closeModal();
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
  
  function getFocusableElements() {
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

function closeForm() {
    const modal = document.getElementById('contact_modal');
    const contactButton = document.querySelector('.contact_button');
  
    modal.style.display = 'none';
  
    contactButton.focus();
}

function focusFirstElement() {
  const firstElement = formElements[0];
  if (firstElement) {
    firstElement.focus();
  }
}
