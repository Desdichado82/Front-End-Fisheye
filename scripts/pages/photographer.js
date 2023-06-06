// Define a function to get the query string from the URL
function getQueryString() {
  return window.location.search;
}

// Define a function to get the ID value from the query string
function getId(queryString) {
  let params = new URLSearchParams(queryString);
  return params.get('id');
}

// Define a function to fetch data from the JSON file
async function fetchData(property) {
  return fetch('./data/photographers.json')
    .then((response) => response.json())
    .then((jsonData) => jsonData[property]);
}

async function fetchMediaData(photographerId) {
  console.log('fetchMediaData called with photographerId:', photographerId);
  const data = await fetchData('media');
  console.log('media data fetched:', data);
  const media = data.filter((item) => item.photographerId == photographerId);
  console.log('filtered media data:', media);
  return media;
}


// Define a function to filter the artist data by matching the ID value
function filterArtistData(photographersArray, id) {
  return photographersArray.filter((artist) => artist.id == id)[0];
}

// call the functions in sequence
let queryString = getQueryString();
console.log('queryString:', queryString);
let id = getId(queryString);
console.log('id:', id);
fetchData('photographers')
  .then((photographersArray) => filterArtistData(photographersArray, id))
  .then((artistData) =>
    // create an artist object using the factory function and pass in the artist data
    photographerFactory(artistData)
  )
  .then((artist) => artist.displayProfile()) // call the displayInfo method on the artist object
  .catch((error) => console.error(error)); // handle any errors

fetchData('media')
  .then((mediaArray) => fetchMediaData(id))
  .then((mediaData) =>
    // create an media object using the factory function and pass in the media data
    mediaFactory(mediaData)
  )
  .catch((error) => console.error(error)); // handle any errors

