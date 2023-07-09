/*this code defines a class that can be used to fetch data from a JSON file and manipulate it in various ways. */

class DataFetcher {
    constructor() {
      this.queryString = window.location.search;
      this.id = this.getId(this.queryString);
    }
  
    getQueryString() {
      return this.queryString;
    }
  
    getId(queryString) {
      let params = new URLSearchParams(queryString);
      return params.get('id');
    }
  
    async fetchData(property) {
      return fetch('./data/photographers.json')
        .then((response) => response.json())
        .then((jsonData) => jsonData[property]);
    }
  
    async fetchMediaData(photographerId) {
      console.log('fetchMediaData called with photographerId:', photographerId);
      const data = await this.fetchData('media');
      console.log('media data fetched:', data);
      const media = data.filter((item) => item.photographerId == photographerId);
      console.log('filtered media data:', media);
      return media;
    }

    async fetchPhotographersData() {
      const data = await this.fetchData('photographers');
      const photographer = data.find((photographer) => photographer.id == this.id);
      return photographer;
    }
  
    filterArtistData(photographersArray, id) {
      return photographersArray.filter((artist) => artist.id == id)[0];
    }
  }

  /*
This code defines a DataFetcher class responsible for fetching and manipulating data. Here's a summary of what the code does:

The DataFetcher class has the following properties and methods:

queryString: Stores the query string from the current window's URL.
id: Stores the extracted ID value from the query string.
getQueryString(): Returns the stored query string.
getId(queryString): Extracts and returns the ID value from the provided query string.
fetchData(property): Fetches data from the photographers.json file and returns the specified property value.
fetchMediaData(photographerId): Fetches media data and filters it based on the provided photographer ID.
fetchPhotographersData(): Fetches photographers data and returns the photographer object matching the stored ID.
filterArtistData(photographersArray, id): Filters an array of photographers based on the provided ID and returns the first matching artist.
The fetchData method fetches data from the photographers.json file using the Fetch API.

The response is converted to JSON format.
The desired property value is extracted from the JSON data and returned.
The fetchMediaData method fetches media data and filters it based on the provided photographer ID.

The fetchData method is called to fetch the media data.
The fetched data is filtered to include only media objects with a matching photographerId.
The filtered media data is returned.
The fetchPhotographersData method fetches photographers data and returns the photographer object matching the stored ID.

The fetchData method is called to fetch the photographers data.
The photographer object with a matching id is found using the stored ID.
The found photographer object is returned.
The filterArtistData method filters an array of photographers based on the provided ID and returns the first matching artist.

The array is filtered to include only artists with a matching id.
The first matching artist is returned.
The DataFetcher class encapsulates the functionality related to data fetching, filtering, and extraction. It provides methods to fetch specific data and perform filtering operations based on the stored ID. The class aims to simplify data retrieval and manipulation for photographers and media objects.
  */
  
  