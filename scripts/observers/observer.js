class Subject {
  constructor() {
    this.observers = [];
  }

  // Add an observer to the list
  addObserver(observer) {
   
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
   
    this.observers.forEach(observer => observer.update(data));
  }
}

export default Subject;

/*
Ce code définit une classe Subject qui sert de sujet ou d'observable dans le modèle d'observation. Voici une explication du code :

La classe Subject possède un constructeur qui initialise un tableau d'observateurs vide.
La méthode addObserver est utilisée pour ajouter un observateur à la liste des observateurs. Elle prend un observateur en paramètre et l'ajoute au tableau des observateurs en utilisant la méthode push.
La méthode removeObserver est utilisée pour supprimer un observateur de la liste des observateurs. Elle prend un observateur en paramètre, trouve son index dans le tableau des observateurs en utilisant indexOf, et le supprime du tableau en utilisant la méthode splice.
La méthode notify est chargée de notifier à tous les observateurs qu'un événement ou un changement de données s'est produit. Elle prend un paramètre data représentant les données associées à l'événement. Elle parcourt le tableau des observateurs et appelle la méthode update sur chaque observateur, en lui transmettant les données en tant qu'argument.
En résumé, ce code définit une classe Subject qui permet de gérer une liste d'observateurs, d'ajouter et de supprimer des observateurs et de notifier tous les observateurs lorsqu'un événement ou un changement de données se produit. Il constitue l'implémentation de base du modèle d'observateur, permettant un couplage lâche entre les sujets et les observateurs et permettant une communication événementielle efficace entre les différentes parties d'un système.

*/