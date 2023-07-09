class LikeButton extends Subject {
  constructor(media) {
    super();
    this.media = media;
    this.totalLikes = this.getTotalLikes();
    console.log('initial totalLikes:', this.totalLikes);
  }

  increaseLikes(id) {
    console.log('increaseLikes called with id:', id);
    this.media.forEach(item => {
      if (item.id === id) {
        item.likes++;
        console.log('item.likes incremented:', item.likes);
        this.totalLikes++;
        console.log('this.totalLikes incremented:', this.totalLikes);
        
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

    console.log('getTotalLikes called, returning:', totalLikes);
    return totalLikes;
  }

  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }

  notify(data) {
    super.notify(data);
  }
}






