function displayModal() {
  const modal = document.getElementById("contact_modal");
modal.style.display = "block";
const firstNameInput = document.getElementById("first-name");
firstNameInput.focus();
}

function closeForm() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

const contactButton = document.querySelector('.contact_button');
contactButton.addEventListener('click', displayModal);



const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const firstNameInput = document.querySelector('#first-name');
  const lastNameInput = document.querySelector('#last-name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');
  
  if (!firstNameInput.checkValidity()) {
    firstNameInput.nextElementSibling.textContent = 'Veuillez saisir un prénom valide';
    return;
  }
  
  if (!lastNameInput.checkValidity()) {
    lastNameInput.nextElementSibling.textContent = 'Veuillez saisir un nom de famille valide';
    return;
  }
  
  if (!emailInput.checkValidity()) {
    emailInput.nextElementSibling.textContent = 'Veuillez saisir un courriel valide';
    return;
  }
  
  const formData = [firstNameInput.value, lastNameInput.value, emailInput.value, messageInput.value];
  console.log(formData);
  localStorage.setItem('formData', JSON.stringify(formData));
  
  fetch('/submit-form', {
    method: 'POST',
    body: new URLSearchParams(new FormData(form))
  }).then(response => {
    // handle response
     // handle response
     closeForm();
  });
});