/*this code defines a function that can be used to create a gallery of media items.
 The gallery displays each media item along with its title and number of likes, 
 and allows users to open a lightbox by clicking on a media item. */

// This function takes in an array of `media` objects as an argument and returns a `gallery` element
function mediaFactory(media) {
  console.log('mediaFactory called with media:', media);

  const main = document.getElementById('main');
  console.log('main element:', main);

  // Clear existing gallery
  const existingGallery = main.querySelector('.gallery');
  if (existingGallery) {
    main.removeChild(existingGallery);
  }

  const gallery = document.createElement('div');
  gallery.className = 'gallery';
  gallery.id = 'gallery-container';

  // Create an instance of the likeButton class 
  const likeButton = new LikeButton(media);

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
    likeIcon.classList.add('bx', 'bxs-heart');

    likeBtn.setAttribute('aria-label', 'Like button');
    likeBtn.setAttribute('data-id', item.id);

    // Check if the current `item` has an `image` property
    if (item.image) {
      // If it does, create an `img` element using the `createImageElement` function
      mediaElement = createImageElement(item);
      mediaElement.setAttribute('alt', item.title);
      mediaElement.setAttribute('aria-label', item.title);
      mediaElement.setAttribute('tabindex', '0');
      article.appendChild(mediaElement);
    } else if (item.video) {
      // If the current `item` has a `video` property, create a `video` element using the `createVideoElement` function
      mediaElement = createVideoElement(item);
      mediaElement.setAttribute('alt', item.title);
      mediaElement.setAttribute('aria-label', item.title);
      mediaElement.setAttribute('tabindex', '0');
      article.appendChild(mediaElement);
    }

    // Check if a media element was created (either an `img` or `video` element)
    if (mediaElement) {
      mediaElement.onclick = () => {
        openLightbox(media, item);
      };

      // Add a keyboard event listener to the media element
      mediaElement.onkeydown = (event) => {
        // Check if the user pressed the enter key
        if (event.key === 'Enter') {
          openLightbox(media, item);
        }
      };

      title.textContent = item.title;
      likeCounter.textContent = item.likes;
      infoContainer.appendChild(title);
      infoContainer.appendChild(likeContainer);
      likeContainer.appendChild(likeCounter);
      likeContainer.appendChild(likeBtn);
      likeBtn.appendChild(likeIcon);

      // Add an event listener to the likeBtn element
      likeBtn.addEventListener('click', () => {
        // Call the increase likes method and pass in the id of the current media item
        likeButton.increaseLikes(item.id);

        // Update the text content of the likeCounter element to display the new number of likes
        likeCounter.textContent = item.likes;

        // Save the updated mediaData Array to local storage 
        localStorage.setItem('mediaData', JSON.stringify(media));
      });

      article.appendChild(infoContainer);
      gallery.appendChild(article);
    }
  });

  main.appendChild(gallery);

  return gallery;
}


/*
This code defines a mediaFactory function responsible for creating and displaying a gallery of media items on a web page. Here's a summary of what the code does:

The mediaFactory function takes a media parameter, which is an array of media objects.
It performs the following steps:
Retrieves the main element from the HTML document.
Clears any existing gallery by removing the current gallery element if it exists.
Creates a new gallery element to hold the media items.
Creates an instance of the LikeButton class.
Iterates through each item in the media array.
For each item, it creates the necessary DOM elements (such as article, infoContainer, title, likeContainer, likeCounter, likeBtn, and likeIcon).
Checks if the item has an image property and creates an img element using the createImageElement function if it does.
If the item has a video property, it creates a video element using the createVideoElement function.
Attaches event listeners to the media elements for click and keyboard events to open a lightbox.
Adds event listener to the likeBtn element to increase the likes of the current media item when clicked, updates the like counter, and saves the updated media data to local storage.
Appends the created elements to the article, infoContainer, and gallery.
Finally, the gallery element is appended to the main element, and the gallery element is returned.
The mediaFactory function encapsulates the logic for creating the gallery of media items dynamically. It handles the creation of DOM elements, event handling, and appending the elements to the appropriate parent elements. The function also integrates with the LikeButton class and handles the update of like counts and local storage.
*/
