    

const getPhotographers = async () => {
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
};

const displayData = async (photographers) => {
  console.log('Data passed to displayData:', photographers);
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
};

const init = async () => {
  try {
    // Retrieve photographer data
    const data = await getPhotographers();
    console.log('Data returned by getPhotographers:', data);
    const photographers = data.photographers;
    const media = data.media;
    await displayData(photographers, media);
  } catch (error) {
    console.log(error);
  }
};

init();


    /*
    The given code consists of three async JavaScript functions: getPhotographers, displayData, and init. Let's summarize each of them:

getPhotographers:

This function fetches data from a JSON file called "photographers.json" using the fetch API.
It checks if the response status is not okay and throws an error if that's the case.
It parses the response data as JSON using the response.json() method.
The parsed data is logged to the console.
Finally, it returns the fetched data.
displayData:

This function takes an array of photographers as an argument.
It selects the first element in the document with the class name "photographer_section" using the querySelector method and assigns it to the variable photographersSection.
It iterates over each photographer in the photographers array using the forEach method.
For each photographer, it calls the photographerFactory function (not provided in the given code) and passes the current photographer object as an argument.
The photographerFactory function returns an object that contains a method named getUserCardDOM.
It calls the getUserCardDOM method and assigns the returned HTML article element to the variable userCardDOM.
It appends the userCardDOM element to the photographersSection element using the appendChild method.
init:

This function is called immediately after its definition.
It first calls the getPhotographers function using the await keyword and assigns the returned object to the variable data.
The photographers and media properties of the data object are destructured and assigned to respective variables.
It calls the displayData function and passes the photographers array as an argument.
Overall, the code fetches data from a JSON file, displays the fetched data by generating HTML elements for each photographer, and initializes the process by calling the init function.
    */


    