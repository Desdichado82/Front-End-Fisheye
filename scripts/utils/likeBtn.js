class LikeButton extends Subject {
  constructor(media) {
    super();
    this.media = media;
  }

  increaseLikes(id) {
    this.media.forEach(item => {
      if (item.id === id) {
        item.likes++;
        console.log(item.likes);

        // Notify all observers that the likes property has been incremented
        this.notify(item.likes);
      }
    });
  }

  getTotalLikes() {
    let totalLikes = 0;
    this.media.forEach(item => {
      totalLikes += item.likes;
    });
    return totalLikes;
  }
}



