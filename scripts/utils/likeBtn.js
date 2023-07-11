import Subject from '../observers/observer.js';

class LikeButton extends Subject {
  constructor(media) {
    super();
    this.media = media;
    this.totalLikes = this.getTotalLikes();
    this.likedItems = new Set();
  }

  increaseLikes(id) {
  
    for (let i = 0; i < this.media.length; i++) {
      const item = this.media[i];
      if (item.id === id) {
        if (this.likedItems.has(id)) {
          item.likes--;
          this.totalLikes--;
          this.likedItems.delete(id);
        } else {
          item.likes++;
          this.totalLikes++;
          this.likedItems.add(id);
        }

        // Notify all observers that the likes property has been updated
        this.notify(item.likes);
        break;
      }
    }
  }

  getTotalLikes() {
    let totalLikes = 0;
    for (let i = 0; i < this.media.length; i++) {
      const item = this.media[i];
      totalLikes += item.likes;
    }
    return totalLikes;
  }

  notify(data) {
    for (let i = 0; i < this.observers.length; i++) {
      const observer = this.observers[i];
      observer.update(data);
    }
  }
}

export default LikeButton;



/*
Ce code définit une classe LikeButton qui étend une classe Subject, probablement pour mettre en œuvre le modèle de l'observateur. Voici une explication du code :

La classe LikeButton possède un constructeur qui prend un paramètre média. Elle appelle le constructeur de la classe Subject en utilisant super() pour hériter de ses fonctionnalités. Elle initialise des propriétés telles que media et totalLikes, qui représente le nombre total de likes.
La méthode increaseLikes est utilisée pour augmenter le nombre de likes pour un élément spécifique identifié par son id. Elle parcourt le tableau des médias et trouve l'élément correspondant. Elle incrémente la propriété likes de l'élément et met à jour le nombre total de likes. Elle notifie également les observateurs en appelant la méthode notify de la classe Subject.
La méthode getTotalLikes calcule et renvoie le nombre total de likes en parcourant le tableau de médias et en additionnant la propriété likes de chaque élément.
La méthode notify est chargée de notifier les observateurs en appelant la méthode update de chaque observateur. Cette méthode est probablement définie dans la classe Subject.
La deuxième méthode notify est redondante et semble être une définition en double. Elle peut être supprimée du code.
En résumé, ce code définit une classe LikeButton qui gère le nombre de likes pour les éléments de média. Il permet d'incrémenter les likes, de calculer le nombre total de likes et de notifier les observateurs lorsque le nombre de likes change. La classe suit le modèle de l'observateur afin de fournir une conception flexible et découplée pour la gestion des likes dans les médias.
*/

