// This function takes in an `item` object as an argument and returns an `img` element
const createImageElement = (item) => {
  console.log('creating img element for image:', item.image);

  const mediaElement = document.createElement('img');
  mediaElement.src = `assets/images/${item.image}`;
  mediaElement.alt = item.title;

  return mediaElement;
};

