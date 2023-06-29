class DropdownAdapterAccessibility {
  constructor(dropdownWrapper, options) {
    this.dropdownWrapper = dropdownWrapper;
    this.options = options;
    this.setupAccessibility();
  }

  setupAccessibility() {
    this.setupDropdownKeyboardNavigation();
  }

  setupDropdownKeyboardNavigation() {
    this.options.forEach((option, index) => {
      option.addEventListener('keydown', event => {
        if (event.key === 'ArrowUp') {
          event.preventDefault();
          const prevIndex = index === 0 ? this.options.length - 1 : index - 1;
          this.options[prevIndex].focus();
        } else if (event.key === 'ArrowDown') {
          event.preventDefault();
          const nextIndex = index === this.options.length - 1 ? 0 : index + 1;
          this.options[nextIndex].focus();
        } else if (event.key === 'Enter') {
          event.preventDefault();
          option.click();
        }
      });
    });
  }
}
