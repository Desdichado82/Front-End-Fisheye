    


    
    /*The spread operator (...) is a JavaScript expression that allows an iterable such as an array or
     a string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
      It can also be used to expand an object in places where zero or more key-value pairs (for object literals) are expected.

    In the code you provided, the spread operator is used to create a new array by spreading the original photographers array three times:
    [...photographers, ...photographers, ...photographers]. 
    This creates a new array that contains three copies of the original photographers array. */
    async function getPhotographers() {
      try {
        // Fetch data from the JSON file
        const response = await fetch("./data/photographers.json");
     
        // Check if the response status is not ok and throw an error
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.status}`);
        }
     
        // Parse the response data as JSON
        const data = await response.json();
        console.log('Data returned by response.json():', data);
        
        // Return the data once it has been fetched
        return data;
      } catch (error) {
        console.log(error);
      }
    }

    /**
     This is an async JavaScript function named displayData that takes an array of photographers as an argument. 
     The function uses the querySelector method to select the first element in the document with the class name 
     photographer_section and assigns it to the variable photographersSection.

    The function then uses the forEach method to iterate over each photographer in the photographers array. 
    For each photographer, the function calls the previously defined photographerFactory function and passes it 
    the current photographer object. The photographerFactory function returns an object that contains a method named getUserCardDOM. 
    This method is called and its return value (an HTML article element) is assigned to the variable userCardDOM.

    The function then uses the appendChild method to append the userCardDOM element to the photographersSection element.
     */
    async function displayData(photographers) {
        console.log('Data passed to displayData:', photographers);
        const photographersSection = document.querySelector(".photographer_section");
    
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    /*
    This is an async JavaScript function named init. 
    The function uses the await keyword to call the previously defined getPhotographers 
    function and wait for it to complete. The getPhotographers function returns an object
    with a property named photographers, which is destructured and assigned to a variable with the same name.

    The function then calls the previously defined displayData function and passes it the photographers array as an argument.

    After the init function is defined, it is immediately called.
    */

    async function init() {
        // Récupère les datas des photographes
        const data = await getPhotographers();
        console.log('Data returned by getPhotographers:', data);
        const photographers = data.photographers;
        const media = data.media;
        displayData(photographers,media);
        
    }
    
    init();


    