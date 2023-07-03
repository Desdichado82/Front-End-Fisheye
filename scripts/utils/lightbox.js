/*this code defines a class that can be used to create a lightbox for displaying media.
 The lightbox can be opened and closed, and its contents can be updated dynamically. */
 class Lightbox {
  constructor(media, item) {
    this.media = media;
    this.lightboxModal = document.createElement('div');
    this.lightboxModal.id = 'lightbox-modal';
    this.lightboxModal.className = 'lightbox';

    // Set the `role` attribute of the `lightboxModal` element to `dialog`
    this.lightboxModal.setAttribute('role', 'dialog');

    this.slideIndex = media.findIndex((m) => m.id === item.id) + 1;

    const modalContent = document.createElement('ul');
    modalContent.className = 'modal-content';
    this.lightboxModal.appendChild(modalContent);

    // Set modalContent property
    this.modalContent = modalContent;

    for (let i = 0; i < media.length; i++) {
      const mySlide = document.createElement('li');
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

    const closeButton = document.createElement('button');
    closeButton.className = 'close cursor';
    closeButton.onclick = () => {
      this.closeModal();
    };
    closeButton.innerHTML = '×';
    closeButton.setAttribute('aria-label', 'Close lightbox');
    closeButton.tabIndex = 0;
    closeButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        this.closeModal();
      }
    });
    modalContent.appendChild(closeButton);

    const prevButton = document.createElement('button');
    prevButton.className = 'prev';
    prevButton.onclick = () => {
      this.plusSlides(-1);
    };
    prevButton.innerHTML = '❮';
    prevButton.setAttribute('aria-label', 'Previous slide');
    prevButton.tabIndex = 0;
    prevButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        this.plusSlides(-1);
      }
    });
    modalContent.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.className = 'next';
    nextButton.onclick = () => {
      this.plusSlides(1);
    };
    nextButton.innerHTML = '❯';
    nextButton.setAttribute('aria-label', 'Next slide');
    nextButton.tabIndex = 0;
    nextButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        this.plusSlides(1);
      }
    });
    modalContent.appendChild(nextButton);

    const captionContainerDiv = document.createElement('div');
    captionContainerDiv.className = 'caption-container';

    const captionP = document.createElement('p');
    captionP.id = 'caption';
    captionP.innerHTML = `${media[this.slideIndex - 1].title}`;
    captionContainerDiv.appendChild(captionP);
    modalContent.appendChild(captionContainerDiv);
    document.body.appendChild(this.lightboxModal);
  }

  updateMediaElements() {
    // Remove existing media elements
    const slides = document.querySelectorAll('.slides');
    slides.forEach((slide) => {
      slide.remove();
    });

    // Create new media elements
    for (let i = 0; i < this.media.length; i++) {
      const mySlide = document.createElement('li');
      mySlide.className = 'slides';

      let mediaElement;
      if (this.media[i].image) {
        mediaElement = createImageElement(this.media[i]);
        mySlide.appendChild(mediaElement);
      } else if (this.media[i].video) {
        mediaElement = createVideoElement(this.media[i]);
        mediaElement.controls = true;
        mySlide.appendChild(mediaElement);
      }

      // Append mySlide to modalContent property
      this.modalContent.appendChild(mySlide);
    }
  }

  closeModal() {
    this.lightboxModal.style.display = 'none';
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

    const slides = document.getElementsByClassName('slides');
    console.log('slides.length:', slides.length);

    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    console.log(slides.length);
    slides[this.slideIndex - 1].style.display = 'block';
    // Update caption
    const captionP = document.getElementById('caption');
    captionP.innerHTML = `${this.media[this.slideIndex - 1].title}`;
  }
}

// Declare lightbox variable outside of openLightbox function
let lightbox;

function openLightbox(media, item) {
  // Check if lightbox variable is already defined
  if (lightbox) {
    // If it is, update its media and slideIndex properties
    lightbox.media = media;
    lightbox.slideIndex = media.findIndex((m) => m.id === item.id) + 1;

    // Show the lightbox modal
    lightbox.lightboxModal.style.display = 'grid';

    // Show the slide for the clicked item
    lightbox.showSlides(lightbox.slideIndex);
  } else {
    // If lightbox variable is not defined, create a new instance of the Lightbox class with the media array and item as arguments
    lightbox = new Lightbox(media, item);

    // Show the lightbox modal
    lightbox.lightboxModal.style.display = 'grid';

    // Show the slide for the clicked item
    lightbox.showSlides(lightbox.slideIndex);
  }

  // Initialize accessibility script
  initializeAccessibility();
}

    

/*
This code defines a Lightbox class that can be used to create a lightbox for displaying media.
 The Lightbox class takes two arguments when creating an instance of it: media and item.
  The media argument is an array of media objects that will be displayed in the lightbox. 
  The item argument is the media object that should be displayed first when the lightbox is opened.

The Lightbox class has several methods, including a constructor, an updateMediaElements method, a closeModal method, and a plusSlides method.
 The constructor is called when creating an instance of the Lightbox class and is used to set up the initial state of the lightbox. 
 It creates several HTML elements and appends them to the DOM to create the lightbox interface.

The updateMediaElements method is used to update the media elements displayed in the lightbox. 
It removes any existing media elements and creates new ones based on the current value of the media property. 
The closeModal method is used to close the lightbox by setting its display style to 'none'. 
The plusSlides method is used to navigate between slides in the lightbox, but its implementation is not shown in the code you provided.
*/