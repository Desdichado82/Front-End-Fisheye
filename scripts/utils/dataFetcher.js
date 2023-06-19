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
  
    filterArtistData(photographersArray, id) {
      return photographersArray.filter((artist) => artist.id == id)[0];
    }
  }

  /*
This code defines a DataFetcher class that can be used to fetch data from a JSON file. 
The DataFetcher class has several methods, including a constructor, a getQueryString method,
 an getId method, a fetchData method, a fetchMediaData method, and a filterArtistData method.

The constructor is called when creating an instance of the DataFetcher class and is used to set up
the initial state of the data fetcher. It takes no arguments and initializes two properties: queryString and id. 
The queryString property is set to the value of the window.location.search property,
which contains the query string of the current URL. The id property is set by calling the getId method with 
the value of the queryString property.

The getQueryString method returns the value of the queryString property. 
The getId method takes a query string as an argument and returns the value of the id parameter in the query string. 
It does this by creating a new instance of the URLSearchParams class with the query string and calling its get method with the 'id' argument.

The fetchData method takes a property name as an argument and returns a promise that
resolves with the value of that property in the JSON data fetched from the './data/photographers.json' file.
It does this by calling the global fetch function with the URL of the JSON file, then calling its .then() method to extract the JSON data from the response.
 Finally, it calls .then() again to extract the value of the specified property from the JSON data.

The fetchMediaData method takes a photographer ID as an argument and returns a promise that resolves with an array of media objects
associated with that photographer. It does this by calling its own fetchData method with the 'media' argument to fetch all
media data from the JSON file. Then it filters this data using its .filter() method to only include media objects
  whose 'photographerId' property matches the specified photographer ID.

The filterArtistData method takes an array of photographers and an ID as arguments and returns a single photographer object whose 'id' property matches the specified ID. 
It does this by calling its .filter() method on the array of photographers to only include photographer objects whose 'id' property matches the specified ID.
 Then it uses array indexing to return only the first element of this filtered array.
  */
  
  