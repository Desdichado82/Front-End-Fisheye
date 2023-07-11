/*this code defines a class that can be used to create a lightbox for displaying media.
 The lightbox can be opened and closed, and its contents can be updated dynamically. */
 class Lightbox {
  constructor(media, item) {
    this.media = media;
    this.lightboxModal = document.createElement('div');
    this.lightboxModal.id = 'lightbox-modal';
    this.lightboxModal.className = 'lightbox';
    this.lightboxModal.setAttribute('role', 'dialog');

    this.slideIndex = media.findIndex((m) => m.id === item.id) + 1;

    const modalContent = document.createElement('ul');
    modalContent.className = 'modal-content';
    this.lightboxModal.appendChild(modalContent);

    this.modalContent = modalContent;

    media.forEach((m) => {
      const mySlide = document.createElement('li');
      mySlide.className = 'slides';

      let mediaElement;
      if (m.image) {
        mediaElement = createImageElement(m);
        mySlide.appendChild(mediaElement);
      } else if (m.video) {
        mediaElement = createVideoElement(m);
        mediaElement.controls = true;
        mySlide.appendChild(mediaElement);
      }

      modalContent.appendChild(mySlide);
    });

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
    const slides = document.querySelectorAll('.slides');
    slides.forEach((slide) => {
      slide.remove();
    });

    this.media.forEach((m) => {
      const mySlide = document.createElement('li');
      mySlide.className = 'slides';

      let mediaElement;
      if (m.image) {
        mediaElement = createImageElement(m);
        mySlide.appendChild(mediaElement);
      } else if (m.video) {
        mediaElement = createVideoElement(m);
        mediaElement.controls = true;
        mySlide.appendChild(mediaElement);
      }

      this.modalContent.appendChild(mySlide);
    });
  }

  closeModal() {
    this.lightboxModal.style.display = 'none';
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    const slides = document.getElementsByClassName('slides');

    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[this.slideIndex - 1].style.display = 'block';

    const captionP = document.getElementById('caption');
    captionP.innerHTML = `${this.media[this.slideIndex - 1].title}`;
  }
}

let lightbox;

function openLightbox(media, item) {
  if (lightbox) {
    lightbox.media = media;
    lightbox.slideIndex = media.findIndex((m) => m.id === item.id) + 1;
    lightbox.lightboxModal.style.display = 'grid';
    lightbox.showSlides(lightbox.slideIndex);
  } else {
    lightbox = new Lightbox(media, item);
    lightbox.lightboxModal.style.display = 'grid';
    lightbox.showSlides(lightbox.slideIndex);
  }

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
