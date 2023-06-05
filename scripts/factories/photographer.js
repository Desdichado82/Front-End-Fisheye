function photographerFactory(data) {
    const { name, id, portrait, city, country, tagline, price } = data;
  
    function getUserCardDOM() {
      const article = document.createElement('article');
      const link = document.createElement('a');
      const img = document.createElement('img');
      const h2 = document.createElement('h2');
      const location = document.createElement('p');
      const tagline_tag = document.createElement('p');
      const price_tag = document.createElement('p');
  
      const params = new URLSearchParams();
      params.append("id", id);
      link.setAttribute("href", `photographer.html?${params.toString()}`);
      link.setAttribute("title", name);
      img.setAttribute("src", `assets/photographers/${portrait}`);
      img.setAttribute("alt", name);
      h2.textContent = name;
      location.textContent = `${country} , ${city}`;
      location.classList.add('location');
      tagline_tag.textContent = tagline;
      tagline_tag.classList.add('tagline');
      price_tag.textContent = `${price}€/jour'`;
      price_tag.classList.add('price');
  
      link.appendChild(img);
      article.appendChild(link);
      article.appendChild(h2);
      article.appendChild(location);
      article.appendChild(tagline_tag);
      article.appendChild(price_tag);
  
      return article;
    }
  
    function displayInfo() {
      const photographersHeader = document.querySelector('.photograph-header');
      const info = document.createElement('div');
      const picture = `assets/photographers/${portrait}`;
      const profile = document.createElement('img');
      const nameTag = document.createElement('h2');
      const address = `${city}, ${country}`;
      const locationTag = document.createElement('p');
      const taglineTag = document.createElement('p');
      
      profile.setAttribute('src', picture);
  
      nameTag.textContent = name;
      locationTag.textContent = address;
      taglineTag.textContent = tagline;
      
      locationTag.className = 'location';
  
      photographersHeader.appendChild(info);
      photographersHeader.appendChild(profile);
      
      info.appendChild(nameTag);
      info.appendChild(locationTag);
      info.appendChild(taglineTag);
    }
  
    return {getUserCardDOM, displayInfo };
  }
  