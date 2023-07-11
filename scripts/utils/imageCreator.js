// This function takes in an `item` object as an argument and returns an `img` element
const createImageElement = (item) => {
 

  const mediaElement = document.createElement('img');
  mediaElement.src = `assets/images/${item.image}`;
  mediaElement.alt = item.title;

  return mediaElement;
};

