function photographerFactory(data) {
  const { name, id, portrait, city, country, tagline, price } = data;

  function getUserCardDOM() {
    const article = document.createElement('article');
    const link = document.createElement('a');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const location = document.createElement('p');
    const taglineTag = document.createElement('p');
    const priceTag = document.createElement('p');
    img.setAttribute('tabindex', '0');
    link.setAttribute('aria-label', 'View profile');
    link.setAttribute('aria-labelledby', `name-${id}`);
    img.setAttribute('tabindex', '0');
    img.setAttribute('alt', `Portrait of ${name}`);
    h2.setAttribute('id', `name-${id}`);

    const params = new URLSearchParams();
    params.append('id', id);
    link.setAttribute('href', `photographer.html?${params.toString()}`);
    link.setAttribute('title', name);
    img.setAttribute('src', `assets/photographers/${portrait}`);
    img.setAttribute('alt',name);

    h2.textContent = name;
    location.textContent = `${country}, ${city}`;
    location.classList.add('location');
    taglineTag.textContent = tagline;
    taglineTag.classList.add('tagline');
    priceTag.textContent = `${price}€/jour`;
    priceTag.classList.add('price');

    link.appendChild(img);
    article.appendChild(link);
    article.appendChild(h2);
    article.appendChild(location);
    article.appendChild(taglineTag);
    article.appendChild(priceTag);

    return article;
  }

  return { getUserCardDOM };
}

/*
The photographerFactory function takes an object called data as an argument. The object contains properties such as name, id, portrait, city, country, tagline, and price.

The getUserCardDOM method:

This method creates HTML elements dynamically to build a user card for a photographer.
It creates an <article> element and several other elements like <a>, <img>, <h2>, <p>, etc.
It sets various attributes for the created elements using the setAttribute method.
It appends child elements to the parent elements using the appendChild method.
It assigns text content to some of the elements using the textContent property.
It adds CSS classes to certain elements using the classList.add method.
Finally, it returns the <article> element, which represents the user card.
The photographerFactory function then returns an object containing the getUserCardDOM method. This allows other parts of the code to call photographerFactory and retrieve the getUserCardDOM method for generating photographer user cards.

In summary, the photographerFactory function serves as a factory for creating photographer user card elements. The getUserCardDOM method generates the necessary HTML elements, sets their attributes and content, and returns the completed user card in the form of an <article> element.
*/