const displayModal = () => {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  const firstNameInput = document.getElementById("first-name");
  firstNameInput.focus();
};

  const closeForm = () => {
  const modal = document.getElementById("contact_modal");
  const contactButton = document.querySelector('.contact_button');
  modal.style.display = "none";
  contactButton.focus();
};

const contactButton = document.querySelector('.contact_button');
contactButton.addEventListener('click', displayModal);

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstNameInput = document.querySelector('#first-name');
  const lastNameInput = document.querySelector('#last-name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');

  // Regular expression to validate name
  const nameRegex = /^[a-zA-Z]{3,}$/;

  if (!nameRegex.test(firstNameInput.value)) {
    firstNameInput.nextElementSibling.textContent = 'Veuillez saisir un prénom valide (au moins trois lettres)';
    return;
  } else {
    firstNameInput.nextElementSibling.textContent = '';
  }

  if (!nameRegex.test(lastNameInput.value)) {
    lastNameInput.nextElementSibling.textContent = 'Veuillez saisir un nom de famille valide (au moins trois lettres)';
    return;
  } else {
    lastNameInput.nextElementSibling.textContent = '';
  }

  if (!emailInput.checkValidity()) {
    emailInput.nextElementSibling.textContent = 'Veuillez saisir un courriel valide';
    return;
  } else {
    emailInput.nextElementSibling.textContent = '';
  }

  const formData = [firstNameInput.value, lastNameInput.value, emailInput.value, messageInput.value];
  console.log(formData);
  localStorage.setItem('formData', JSON.stringify(formData));

  fetch('/submit-form', {
    method: 'POST',
    body: new URLSearchParams(new FormData(form))
  }).then(response => {
    // handle response
    closeForm();
  });
});


/*
The displayModal function is called when a contact button with the class "contact_button" is clicked. It retrieves the modal element with the ID "contact_modal" and sets its display style to "block", making it visible. It also focuses on the first name input field.

The closeForm function is called to hide the contact modal. It retrieves the modal element and sets its display style to "none", making it invisible.

An event listener is added to the contact button with the class "contact_button". When this button is clicked, the displayModal function is called, showing the contact form modal.

Another event listener is added to the form element. When the form is submitted, the event's default behavior (page refresh or navigation) is prevented using event.preventDefault().

The code then retrieves various input elements such as the first name, last name, email, and message inputs from the form.

A regular expression (nameRegex) is defined to validate the first and last name inputs. It ensures that the input consists of at least three letters (both uppercase and lowercase) only.

It performs validation checks on the first name, last name, and email inputs. If any of these inputs fail the validation, an error message is displayed next to the respective input field, and the function returns to prevent further processing.

If all inputs pass the validation, an array called formData is created, containing the values of the input fields.

The formData array is logged to the console and stored in the browser's local storage using localStorage.setItem().

A fetch request is made to the "/submit-form" URL endpoint with the HTTP method set to "POST". The request body contains the form data encoded as URL parameters using new URLSearchParams(new FormData(form)).

After the fetch request is made, a promise is returned. When the promise is resolved, the then callback is executed, which calls the closeForm function to hide the contact modal.

In summary, this code provides functionality to display and submit a contact form modal. It performs client-side validation on the input fields and sends the form data to the server using a POST request. It also handles the closing of the modal and provides feedback to the user in case of validation errors.
*/