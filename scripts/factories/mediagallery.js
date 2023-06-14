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

    infoContainer.classList.add('infoContainer');
    likeContainer.classList.add('likeContainer');

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
      article.appendChild(infoContainer);
      gallery.appendChild(article);
    }
  });
  main.appendChild(gallery);

  return gallery;
}
