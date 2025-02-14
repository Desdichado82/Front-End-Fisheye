import { photographerFactory } from '../factories/photographer.js';
import { displayProfileDecorator } from '../decorator/displayProfile.js';
import DataFetcher from '../utils/dataFetcher.js';
import LikeButton from '../utils/likeBtn.js';

const dataFetcher = new DataFetcher();


dataFetcher.fetchData('photographers')
  .then((photographersArray) => dataFetcher.filterArtistData(photographersArray, dataFetcher.id))
  .then((artistData) => {
    // Assign the fetched artist data to the data variable
    const data = artistData;

    // Create an instance of the object returned by the photographerFactory function
    const photographer = photographerFactory(data);

    // Extract the necessary values from the data object
    const { name, portrait, city, country, tagline,price } = data;

    // Decorate the photographer instance with the displayProfile function
    displayProfileDecorator(photographer, name, portrait, city, country, tagline);

    // Call the displayProfile function on the decorated photographer instance
    photographer.displayProfile();

    //modal_title
    // Create an h2 element and set its text content to the photographer's name
    const nameElement = document.getElementById('modal_title');
    nameElement.textContent = `Contactez-moi ${name}`;

    // Append the h2 element to the stickyContainer element
    const stickyContainer = document.createElement('div');
    stickyContainer.classList = 'stickyWrapper';
    document.body.appendChild(stickyContainer);

    const prixparJour = document.createElement('span');
    prixparJour.textContent = `${price}€ /Jour `;
    stickyContainer.appendChild( prixparJour);

  })
  .catch((error) => console.error(error)); // handle any errors


 dataFetcher.fetchData('media')
  .then((mediaArray) => {


    return dataFetcher.fetchMediaData(dataFetcher.id);
  })
  .then((mediaData) => {
  
    // create a media object using the factory function and pass in the media data
    //mediaFactory(mediaData);

    // Create an instance of the LikeButton class
    const likeButton = new LikeButton(mediaData);
    

    // Get the total number of likes for the current member
    const totalLikes = likeButton.getTotalLikes(dataFetcher.id);



    // Create an element to display the total number of likes
    const stickyWrapper = document.querySelector('.stickyWrapper');
    const totalLikesElement = document.createElement('span');
    totalLikesElement.classList.add('bx','bxs-heart');
    totalLikesElement.textContent = `${totalLikes}`;
    stickyWrapper.appendChild(totalLikesElement);
    // Append the totalLikesElement to the page
   
    // Create the totalLikesObserver object
    const totalLikesObserver = {
      update: (likes) => {
       
    
        // Update the totalLikesElement with the new total number of likes
        totalLikesElement.textContent = `${likeButton.totalLikes}`;
    
        
      }
    };

// Add the totalLikesObserver as an observer of the likeButton instance
likeButton.addObserver(totalLikesObserver);


// Add an event listener to each like button to increment its likes property when clicked
document.querySelectorAll('.likeBtn').forEach(button => {
  button.addEventListener('click', event => {
    // Get the id of the media object associated with the clicked like button
    const id = parseInt(event.currentTarget.dataset.id, 10);

    // Increment the likes property of the media object
    likeButton.increaseLikes(id);
    

    // Notify all observers that a like button has been clicked
    likeButton.notify(likeButton.totalLikes);

  });
});
  })
  .catch((error) => console.error(error)); // handle any errors