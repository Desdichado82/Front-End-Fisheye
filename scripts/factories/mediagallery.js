// This function takes in an array of `media` objects as an argument and returns a `gallery` element
function mediaFactory(media) {
    // Log a message to the console indicating that the function was called with the specified `media` array
    console.log('mediaFactory called with media:', media);
    
    // Get a reference to the `main` element on the page
    const main = document.getElementById('main');
    
    // Log a message to the console indicating the `main` element that was found
    console.log('main element:', main);
    
    // Create a new `div` element to represent the gallery
    const gallery = document.createElement('div');
    
    // Set the `className` of the `gallery` element to "gallery"
    gallery.className = 'gallery';
    
    // Loop through each item in the `media` array
    media.forEach((item) => {
      // Log a message to the console indicating that the function is processing the current `item`
      console.log('processing media item:', item);
      
      // Declare a variable to hold the media element (either an `img` or `video` element)
      let mediaElement;
      
      // Create a new `article` element to represent the current media item
      const article = document.createElement('article');
      
      // Check if the current `item` has an `image` property
      if (item.image) {
        // If it does, create an `img` element using the `createImageElement` function
        mediaElement = createImageElement(item);
        
        // Append the `img` element to the `article` element
        article.appendChild(mediaElement);
      } else if (item.video) {
        // If the current `item` has a `video` property, create a `video` element using the `createVideoElement` function
        mediaElement = createVideoElement(item);
        
        // Append the `video` element to the `article` element
        article.appendChild(mediaElement);
      }
      
      // Check if a media element was created (either an `img` or `video` element)
      if (mediaElement) {
        // If it was, add an onclick event listener to the media element
        mediaElement.onclick = () => {
          // When the media element is clicked, implement lightbox functionality here
          //lightbox();
        };
        
        // Append the `article` element to the `gallery` element
        gallery.appendChild(article);
      }
    });
    
    // Append the `gallery` element to the `main` element on the page
    main.appendChild(gallery);
    
    // Return the `gallery` element
    return gallery;
  }
  
   
   