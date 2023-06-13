// This function takes in an array of `media` objects as an argument and returns a `gallery` element
function mediaFactory(media) {

  console.log('mediaFactory called with media:', media);
    
    const main = document.getElementById('main');
    console.log('main element:', main);

    // clear existing gallery 
  const existingGallery = main.querySelector('.gallery');
  if (existingGallery) {
    main.removeChild(existingGallery);
  }

    const gallery = document.createElement('div');
    gallery.className = 'gallery';
    
    // Loop through each item in the `media` array
    media.forEach((item) => {
      // Log a message to the console indicating that the function is processing the current `item`
      console.log('processing media item:', item);
      
      // Declare a variable to hold the media element (either an `img` or `video` element)
      let mediaElement;
      
      const article = document.createElement('article');
      
      // Check if the current `item` has an `image` property
      if (item.image) {
        // If it does, create an `img` element using the `createImageElement` function
        mediaElement = createImageElement(item);
        article.appendChild(mediaElement);
      } else if (item.video) {
        // If the current `item` has a `video` property, create a `video` element using the `createVideoElement` function
        mediaElement = createVideoElement(item);
        article.appendChild(mediaElement);
      }
      
      // Check if a media element was created (either an `img` or `video` element)
    if (mediaElement) {
      mediaElement.onclick = () => {
        openLightbox(media, item);
      };
      gallery.appendChild(article);
    }
  });
  main.appendChild(gallery);

  return gallery;
  }
  
   
   