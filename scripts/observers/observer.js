class Subject {
  constructor() {
    this.observers = [];
  }

  // Add an observer to the list
  addObserver(observer) {
    console.log('Subject.addObserver called with observer:', observer);
    this.observers.push(observer);
  }

  // Remove an observer from the list
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  // Notify all observers that an event has occurred
  notify(data) {
    console.log('Subject.notify called with data:', data);
    this.observers.forEach(observer => observer.update(data));
  }
}
