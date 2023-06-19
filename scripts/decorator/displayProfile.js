// Define a decorator function that takes a photographerFactory instance and additional arguments for the necessary variables
function displayProfileDecorator(photographerFactory, name, portrait, city, country, tagline) {
    // Define the displayProfile function
    function displayProfile() {
      // Implement the displayProfile logic here
      const photographersHeader = document.querySelector('.photograph-header');
      const info = document.createElement('div');
      const picture = `assets/photographers/${portrait}`;
      const profile = document.createElement('img');
      const nameTag = document.createElement('h2');
      const address = `${city}, ${country}`;
      const locationTag = document.createElement('p');
      const taglineTag = document.createElement('p');
  
      profile.setAttribute('src', picture);
      // Set the `alt` attribute of the `profile` element to an empty string
      profile.setAttribute('alt', '');
  
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
  
    // Add the displayProfile function to the photographerFactory instance
    photographerFactory.displayProfile = displayProfile;
  }

  



  