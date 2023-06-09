

const dataFetcher = new DataFetcher();
console.log('queryString:', dataFetcher.getQueryString());
console.log('id:', dataFetcher.id);
dataFetcher.fetchData('photographers')
  .then((photographersArray) => dataFetcher.filterArtistData(photographersArray, dataFetcher.id))
  .then((artistData) =>
    // create an artist object using the factory function and pass in the artist data
    photographerFactory(artistData)
  )
  .then((artist) => artist.displayProfile()) // call the displayInfo method on the artist object
  .catch((error) => console.error(error)); // handle any errors

dataFetcher.fetchData('media')
  .then((mediaArray) => dataFetcher.fetchMediaData(dataFetcher.id))
  .then((mediaData) =>
    // create an media object using the factory function and pass in the media data
    mediaFactory(mediaData)
  )
  .catch((error) => console.error(error)); // handle any errors
