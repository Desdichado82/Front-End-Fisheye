function createVideoElement(item) {
    console.log('creating video element for video:', item.video);
    const mediaElement = document.createElement('video');
    const mediaSource = document.createElement('source');
    mediaElement.setAttribute("src", `assets/images/${item.video}`);
    mediaSource.setAttribute("src", `assets/images/${item.video}`);
    mediaSource.setAttribute("type", `video/mp4`);
    mediaElement.appendChild(mediaSource);
    return mediaElement;
  }
  