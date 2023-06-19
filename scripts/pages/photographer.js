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
  .then((mediaArray) => dataFetcher.fetchMediaData(dataFetcher.id))
  .then((mediaData) =>
    // create an media object using the factory function and pass in the media data
    mediaFactory(mediaData)
  )
  .catch((error) => console.error(error)); // handle any errors



