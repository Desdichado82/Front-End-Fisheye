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

    link.setAttribute('aria-label', 'View profile');
    link.setAttribute('aria-labelledby', `name-${id}`);
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