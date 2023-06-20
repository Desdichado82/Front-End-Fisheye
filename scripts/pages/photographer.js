const dataFetcher = new DataFetcher();
console.log('queryString:', dataFetcher.getQueryString());
console.log('id:', dataFetcher.id);

dataFetcher.fetchData('photographers')
  .then((photographersArray) => dataFetcher.filterArtistData(photographersArray, dataFetcher.id))
  .then((artistData) => {
    // Assign the fetched artist data to the data variable
    const data = artistData;

    // Create an instance of the object returned by the photographerFactory function
    const photographer = photographerFactory(data);

    // Extract the necessary values from the data object
    const { name, portrait, city, country, tagline } = data;

    // Decorate the photographer instance with the displayProfile function
    displayProfileDecorator(photographer, name, portrait, city, country, tagline);

    // Call the displayProfile function on the decorated photographer instance
    photographer.displayProfile();
  })
  .catch((error) => console.error(error)); // handle any errors


 dataFetcher.fetchData('media')
  .then((mediaArray) => {
    // Log the mediaArray to the console
    console.log('mediaArray:', mediaArray);

    return dataFetcher.fetchMediaData(dataFetcher.id);
  })
  .then((mediaData) => {
    // Log the mediaData array to the console
    console.log('mediaData:', mediaData);

    // create a media object using the factory function and pass in the media data
    mediaFactory(mediaData);

    // Create an instance of the LikeButton class
    const likeButton = new LikeButton(mediaData);
    
    // Log the id property of the dataFetcher object to the console
    console.log('dataFetcher.id:', dataFetcher.id);

    // Get the total number of likes for the current member
    const totalLikes = likeButton.getTotalLikes(dataFetcher.id);

    // Log the totalLikes value to the console
    console.log('totalLikes:', totalLikes);

    // Create an element to display the total number of likes
    const totalLikesElement = document.createElement('p');
    totalLikesElement.textContent = `Total Likes: ${totalLikes}`;

    // Append the totalLikesElement to the page
    document.body.appendChild(totalLikesElement);

    // Define an observer that will update the total number of likes displayed on the page
    const totalLikesObserver = {
      update: (likes) => {
        // Get the current total number of likes
        const totalLikes = likeButton.getTotalLikes();

        // Update the totalLikesElement with the new total number of likes
        totalLikesElement.textContent = `Total Likes: ${totalLikes}`;
      }
    };

    // Add the totalLikesObserver as an observer of the likeButtonSubject
    likeButton.addObserver(totalLikesObserver);

    // Add an event listener to each like button to increment its likes property when clicked
    document.querySelectorAll('.like-button').forEach(button => {
      button.addEventListener('click', event => {
        // Get the id of the media object associated with the clicked like button
        const id = parseInt(event.target.dataset.id, 10);

        // Increment the likes property of the media object
        likeButton.increaseLikes(id);
      });
    });
  })
  .catch((error) => console.error(error)); // handle any errors