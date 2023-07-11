
export const initializeAccessibility = () => {
  // Add event listeners for keyboard navigation
  document.addEventListener('keydown', handleKeyDown);

  function handleKeyDown(event) {
    const lightboxModal = document.getElementById('lightbox-modal');
    const activeElement = document.activeElement;

    if (lightboxModal.style.display === 'grid') {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          navigateSlide('previous');
          break;
        case 'ArrowRight':
          event.preventDefault();
          navigateSlide('next');
          break;
        case 'Escape':
          event.preventDefault();
          closeModal();
          break;
        case 'Tab':
          if (!lightboxModal.contains(activeElement)) {
            event.preventDefault();
            focusFirstElement();
          }
          break;
        default:
          break;
      }
    }
  }
 let lightbox;
  const navigateSlide = (direction) => {
    if (direction === 'previous') {
      lightbox.plusSlides(-1);
    } else if (direction === 'next') {
      lightbox.plusSlides(1);
    }
  };

  const closeModal = () => {
    lightbox.closeModal();
  };

  const focusFirstElement = () => {
    const firstFocusableElement = document.querySelector('#lightbox-modal [tabindex="0"]');
    if (firstFocusableElement) {
      firstFocusableElement.focus();
    }
  };
};
