function mediaFactory(media) {
    console.log('mediaFactory called with media:', media);
    const main = document.getElementById('main');
    console.log('main element:', main);
    const gallery = document.createElement('div');
    gallery.className = 'gallery';
  
    media.forEach((item) => {
      console.log('processing media item:', item);
      let mediaElement;
      const article = document.createElement('article');
      if (item.image) {
        console.log('creating img element for image:', item.image);
        mediaElement = document.createElement('img');
        mediaElement.setAttribute("src", `assets/images/${item.image}`);
        article.appendChild(mediaElement);
      
      } else if (item.video) {
        console.log('creating video element for video:', item.video);
        mediaElement = document.createElement('video');
        mediaSource = document.createElement('source');
        mediaElement.setAttribute("src", `assets/images/${item.video}`);
        mediaSource.setAttribute("src", `assets/images/${item.video}`);
        mediaSource.setAttribute("type", `video/mp4`);
        mediaElement.appendChild(mediaSource);
        article.appendChild(mediaElement);
      }
      if (mediaElement) {
        // add an onclick event Listener 
        mediaElement.onclick = () => {
          //implement lightbox functionality here
          //lightbox();
        };
        gallery.appendChild(article);
      }
    });
    main.appendChild(gallery);
    return gallery;
}
  

