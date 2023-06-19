// This function takes in a `data` object as an argument and returns an object with two methods: `getUserCardDOM` and `displayProfile`
function photographerFactory(data) {
  // Destructure the `data` object to extract the properties we need
  const { name, id, portrait, city, country, tagline, price } = data;

  // This function returns a DOM element representing the user card for the photographer
  function getUserCardDOM() {
    // Create the necessary DOM elements
    const article = document.createElement('article');
    const link = document.createElement('a');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const location = document.createElement('p');
    const tagline_tag = document.createElement('p');
    const price_tag = document.createElement('p');

    link.setAttribute('aria-label', 'Link');

    // Create a new URLSearchParams object to store the query parameters for the link
    const params = new URLSearchParams();
    // Append the `id` parameter to the URLSearchParams object
    params.append("id", id);
    // Set the `href` attribute of the `link` element to point to the photographer page with the specified query parameters
    link.setAttribute("href", `photographer.html?${params.toString()}`);
    // Set the `title` attribute of the `link` element to the photographer's name
    link.setAttribute("title", name);
    // Set the `src` attribute of the `img` element to point to the photographer's portrait image on the server
    img.setAttribute("src", `assets/photographers/${portrait}`);
    // Set the `alt` attribute of the `img` element to an empty string
    img.setAttribute("alt", "");
    // Set the text content of the `h2` element to the photographer's name
    h2.textContent = name;

    // Set the text content of the `location` element to the photographer's city and country
    location.textContent = `${country} , ${city}`;
    location.classList.add('location');
    tagline_tag.textContent = tagline;
    tagline_tag.classList.add('tagline');
    price_tag.textContent = `${price}€/jour'`;
    price_tag.classList.add('price');

    // Append all of these elements together in a hierarchy that represents a user card for this photographer
    link.appendChild(img);
    article.appendChild(link);
    article.appendChild(h2);
    article.appendChild(location);
    article.appendChild(tagline_tag);
    article.appendChild(price_tag);

    return article;
  }

  
  return { getUserCardDOM};
  }