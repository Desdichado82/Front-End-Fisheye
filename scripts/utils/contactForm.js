function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

const contactButton = document.querySelector('.contact_button');
contactButton.addEventListener('click', displayModal);

contactButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      displayModal();
    }
  });

  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const firstNameInput = document.querySelector('#first-name');
    const lastNameInput = document.querySelector('#last-name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    
    if (!firstNameInput.checkValidity()) {
      firstNameInput.nextElementSibling.textContent = 'Please enter a valid first name';
      return;
    }
    
    if (!lastNameInput.checkValidity()) {
      lastNameInput.nextElementSibling.textContent = 'Please enter a valid last name';
      return;
    }
    
    if (!emailInput.checkValidity()) {
      emailInput.nextElementSibling.textContent = 'Please enter a valid email';
      return;
    }
    
    const formData = [firstNameInput.value, lastNameInput.value, emailInput.value, messageInput.value];
    localStorage.setItem('formData', JSON.stringify(formData));
    
    fetch('/submit-form', {
      method: 'POST',
      body: new URLSearchParams(new FormData(form))
    }).then(response => {
      // handle response
       // handle response
       closeModal();
    });
  });