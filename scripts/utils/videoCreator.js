const createVideoElement = (item) => {
  console.log('creating video element for video:', item.video);

  const mediaElement = document.createElement('video');
  const mediaSource = document.createElement('source');

  mediaElement.src = `assets/images/${item.video}`;
  mediaSource.src = `assets/images/${item.video}`;
  mediaSource.type = 'video/mp4';
  mediaElement.alt = item.title;

  mediaElement.appendChild(mediaSource);

  return mediaElement;
};

