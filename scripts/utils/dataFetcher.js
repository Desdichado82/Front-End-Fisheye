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
  
  