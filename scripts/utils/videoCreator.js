// This function takes in an `item` object as an argument and returns a `video` element
function createVideoElement(item) {
  // Log a message to the console indicating that the function is creating a `video` element for the specified video
  console.log('creating video element for video:', item.video);
  
  // Create a new `video` element
  const mediaElement = document.createElement('video');
  
  // Create a new `source` element
  const mediaSource = document.createElement('source');
  
  // Set the `src` attribute of the `video` element to the path of the video file on the server
  mediaElement.setAttribute("src", `assets/images/${item.video}`);
  
  // Set the `src` attribute of the `source` element to the path of the video file on the server
  mediaSource.setAttribute("src", `assets/images/${item.video}`);
  
  // Set the `type` attribute of the `source` element to specify that the video file is in MP4 format
  mediaSource.setAttribute("type", `video/mp4`);
  mediaElement.setAttribute("alt", item.title);


 

  
  // Append the `source` element to the `video` element
  mediaElement.appendChild(mediaSource);
  
  // Return the `video` element
  return mediaElement;
}

