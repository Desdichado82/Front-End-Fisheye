// Define a function to get the query string from the URL
function getQueryString() {
  return window.location.search;
}

// Define a function to get the ID value from the query string
function getId(queryString) {
  let params = new URLSearchParams(queryString);
  return params.get('id');
}

// Define a function to fetch the JSON file that contains the artist data
async function fetchArtistData() {
  return fetch('./data/photographers.json')
    .then((response) => response.json())
    .then((jsonData) => jsonData.photographers);
}

// Define a function to filter the artist data by matching the ID value
function filterArtistData(photographersArray, id) {
  return photographersArray.filter((artist) => artist.id == id)[0];
}

// call the functions in sequence
let queryString = getQueryString();
let id = getId(queryString);
fetchArtistData()
  .then((photographersArray) => filterArtistData(photographersArray, id))
  .then((artistData) =>
    // create an artist object using the factory function and pass in the artist data
    photographerFactory(artistData)
  )
  .then((artist) => artist.displayInfo()) // call the displayInfo method on the artist object
  .catch((error) => console.error(error)); // handle any errors

