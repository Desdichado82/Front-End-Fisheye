class Lightbox {
  constructor(media,item) {
    this.media = media;
    this.lightboxModal = document.createElement('div');
    this.lightboxModal.id = 'lightbox-modal';
    this.lightboxModal.className = 'lightbox';
    this.slideIndex =  media.findIndex(m => m.id === item.id) + 1;
    

    const closeSpan = document.createElement('span');
    closeSpan.className = 'close cursor';
    closeSpan.onclick = () => { this.closeModal(); };
    closeSpan.innerHTML = '×';
    this.lightboxModal.appendChild(closeSpan);

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    this.lightboxModal.appendChild(modalContent);

    for (let i = 0; i < media.length; i++) {
      const mySlide = document.createElement('div');
      mySlide.className = 'slides';

     

      let mediaElement;
      if (media[i].image) {
        mediaElement = createImageElement(media[i]);
        mySlide.appendChild(mediaElement);
      } else if (media[i].video) {
        mediaElement = createVideoElement(media[i]);
        mediaElement.controls = true;
        mySlide.appendChild(mediaElement);
      }

      modalContent.appendChild(mySlide);
    }

    const prevA = document.createElement('a');
    prevA.className = 'prev';
    prevA.onclick = () => { this.plusSlides(-1); };
    prevA.innerHTML = '❮';
    modalContent.appendChild(prevA);

    const nextA = document.createElement('a');
    nextA.className = 'next';
    nextA.onclick = () => { this.plusSlides(1); };
    nextA.innerHTML = '❯';
    modalContent.appendChild(nextA);

    const captionContainerDiv = document.createElement('div');
    captionContainerDiv.className = 'caption-container';

    const captionP = document.createElement('p');
    captionP.id = 'caption';
    captionP.innerHTML = `${media[this.slideIndex - 1].title}`;
    captionContainerDiv.appendChild(captionP);
    modalContent.appendChild(captionContainerDiv);
    document.body.appendChild(this.lightboxModal);
  }

  closeModal() {
    this.lightboxModal.style.display = "none";
  }

  plusSlides(n) {
     // Implement plusSlides logic here
     this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
     // Implement currentSlide logic here
     this.showSlides(this.slideIndex = n);
  }

showSlides(n) {
  console.log('showSlides called with n:', n);
  console.log('this.slideIndex:', this.slideIndex);

  const slides = document.getElementsByClassName("slides");
  console.log('slides.length:', slides.length);

  if (n > slides.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  console.log(slides.length);
  slides[this.slideIndex-1].style.display = "block";
  // Update caption
  const captionP = document.getElementById('caption');
  captionP.innerHTML = `${this.media[this.slideIndex - 1].title}`;
}
  
}
// Declare lightbox variable outside of openLightbox function
let lightbox;

function openLightbox(media,item) {
  // Check if lightbox variable is already defined
  if (lightbox) {
    // If it is, update its media and slideIndex properties
    lightbox.media = media;
    lightbox.slideIndex = media.findIndex(m => m.id === item.id) + 1;
    
    // Show the lightbox modal
    lightbox.lightboxModal.style.display = "block";
    
    // Show the slide for the clicked item
    lightbox.showSlides(lightbox.slideIndex);
  } else {
    // If lightbox variable is not defined, create a new instance of the Lightbox class with the media array and item as arguments
    lightbox = new Lightbox(media,item);

    // Show the lightbox modal
    lightbox.lightboxModal.style.display = "block";
    
    // Show the slide for the clicked item
    lightbox.showSlides(lightbox.slideIndex);
  }
}
