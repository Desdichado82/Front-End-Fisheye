// This function takes in an `item` object as an argument and returns an `img` element
function createImageElement(item) {
    // Log a message to the console indicating that the function is creating an `img` element for the specified image
    console.log('creating img element for image:', item.image);
    
    // Create a new `img` element
    const mediaElement = document.createElement('img');
    
    // Set the `src` attribute of the `img` element to the path of the image file on the server
    mediaElement.setAttribute("src", `assets/images/${item.image}`);
    mediaElement.setAttribute("alt", item.title);
    
    // Return the `img` element
    return mediaElement;
  }
  