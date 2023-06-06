function createImageElement(item) {
    console.log('creating img element for image:', item.image);
    const mediaElement = document.createElement('img');
    mediaElement.setAttribute("src", `assets/images/${item.image}`);
    return mediaElement;
  }