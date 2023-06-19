/*this code defines a function that can be used to create a gallery of media items.
 The gallery displays each media item along with its title and number of likes, 
 and allows users to open a lightbox by clicking on a media item. */

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
    const infoContainer = document.createElement('div');
    const title = document.createElement('p');
    const likeContainer = document.createElement('div');
    const likeCounter = document.createElement('span');
    const likeBtn = document.createElement('button');
    const likeIcon = document.createElement('i');

    infoContainer.classList.add('infoContainer');
    likeContainer.classList.add('likeContainer');
    likeBtn.className = 'likeBtn';
    likeIcon.classList.add('bx','bxs-heart');
   

    likeBtn.setAttribute('aria-label', 'Like button');

    // Check if the current `item` has an `image` property
    if (item.image) {
      // If it does, create an `img` element using the `createImageElement` function
      mediaElement = createImageElement(item);
      mediaElement.setAttribute('alt', item.title);
      article.appendChild(mediaElement);
    } else if (item.video) {
      // If the current `item` has a `video` property, create a `video` element using the `createVideoElement` function
      mediaElement = createVideoElement(item);
      mediaElement.setAttribute('alt', item.title);
      article.appendChild(mediaElement);
    }

    // Check if a media element was created (either an `img` or `video` element)
    if (mediaElement) {
      mediaElement.onclick = () => {
        openLightbox(media, item);
      };

      title.textContent = item.title;
      likeCounter.textContent = item.likes;
      infoContainer.appendChild(title);
      infoContainer.appendChild(likeContainer);
      likeContainer.appendChild(likeCounter);
      likeContainer.appendChild(likeBtn);
      likeBtn.appendChild(likeIcon);
      article.appendChild(infoContainer);
      gallery.appendChild(article);
    }
  });
  main.appendChild(gallery);

  return gallery;
}

/*
This code defines a mediaFactory function that takes an array of media objects as an argument and returns a gallery element. 
The mediaFactory function creates a new div element with the class name 'gallery', 
then loops through each item in the media array and creates an article element for each one.

Inside the loop, the function checks if the current item has an image property. 
If it does, it calls the createImageElement function to create an img element for the image.
If the current item has a video property instead, it calls the createVideoElement function to create a video element for the video.
The created media element is then appended to the article element.

The function also creates several other elements inside the loop, 
including a div element with the class name 'infoContainer', a p element for the title of the media item,
and a div element with the class name 'likeContainer'. These elements are used to display information about the media item,
such as its title and number of likes. 
The function also adds an event listener to the media element that calls the openLightbox function when clicked.

After all media items have been processed, the function appends the gallery element to the 'main' element in the DOM and returns it.
*/
