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


  /*
  This code defines a decorator function called displayProfileDecorator that takes a photographerFactory instance and additional arguments related to a photographer's profile (name, portrait, city, country, tagline).

Inside the displayProfileDecorator function:

There is a nested function called displayProfile that contains the logic for displaying a photographer's profile.
It selects the element with the class name "photograph-header" using document.querySelector.
It creates and configures DOM elements (such as div, img, h2, and p) to represent the photographer's profile information.
It sets the src attribute of the profile image to the specified portrait variable and sets the alt attribute to an empty string.
It assigns the provided values (name, address, and tagline) to the corresponding DOM elements.
It appends the created DOM elements to the "photograph-header" element to display the photographer's profile.
At the end of the code, the displayProfile function is added to the photographerFactory instance by assigning it as a property called displayProfile.
  */

  



  