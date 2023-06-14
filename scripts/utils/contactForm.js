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