/*This code creates a dropdown filter for media using an adapter design pattern. 
The adapter class encapsulates the logic for creating and managing the dropdown filter,
 while allowing it to be customized using arguments passed to its constructor and methods. */

class DropdownAdapter {
  constructor(dropContainerId, mediaData, lightbox, mediaFactory, DataFetcher) {
    this.dropContainer = document.getElementById(dropContainerId);
    this.dropdownWrapper = document.createElement('div');
    this.dropdownWrapper.id = 'dropdownWrapper';
    this.dropContainer.appendChild(this.dropdownWrapper);

    this.dropdownBtn = document.createElement('button');
    this.dropdownBtn.id = 'DropBtn';
    this.dropdownBtn.setAttribute('aria-label', 'Filter button');
    this.dropdownWrapper.appendChild(this.dropdownBtn);

    this.toggleArrow = document.createElement('i');
    this.toggleArrow.id = 'arrow';
    this.toggleArrow.classList.add('bx', 'bx-chevron-down'); 
    this.dropdownBtn.appendChild(this.toggleArrow);

    this.dropdownMenu = document.createElement('div');
    this.dropdownMenu.id = 'dropdown';
    this.dropdownMenu.className = "dropdown";
    this.dropdownWrapper.appendChild(this.dropdownMenu);

    // Toggle Dropdown function 
    const toggleDropdown = () => {
      this.dropdownMenu.classList.toggle('show');
      this.toggleArrow.classList.toggle("arrow");
    };

    // toggle dropdown open . close when dropdown button is clicked 
    this.dropdownBtn.addEventListener("click",function(e){
      e.stopPropagation();
      toggleDropdown();
    });

    const dropdownBtnText = document.createElement('span');
    dropdownBtnText.id = 'dropdownBtnText';
    this.dropdownBtn.insertBefore(dropdownBtnText, this.toggleArrow);
    //dropdownBtnText.innerText = 'Popularité';

    // close dropdown when dom element is clicked 
    document.documentElement.addEventListener("click",
      () => {
        if(this.dropdownMenu.classList.contains("show")){
          toggleDropdown();
        }
      }
    );
  }

  // Filter media based on selected value
  filterMedia(selectedValue) {
      if (selectedValue === 'popularité') {
        mediaData.sort((a, b) => b.likes - a.likes);
        console.log('this is the data for popularity',mediaData)
      } else if (selectedValue === 'date') {
        mediaData.sort((a, b) => new Date(a.date) - new Date(b.date));
      } else if (selectedValue === 'titre') {
        mediaData.sort((a, b) => a.title.localeCompare(b.title));
        console.log('this is the filterdata',mediaData)
      }

      // Update lightbox with filtered media
      if (lightbox) {
        lightbox.media = mediaData;
        lightbox.updateMediaElements();
      }

      // Update Gallery with filtered media
      mediaFactory(mediaData);
  }

  addOptions(optionsData) {
    const options = [];

    optionsData.forEach(optionData => {
      const option = document.createElement('a');
      option.id = optionData.id;
      option.innerText = optionData.text;
      option.setAttribute('aria-label', optionData.ariaLabel);
      this.dropdownMenu.appendChild(option);
      options.push(option);
    });

    return options;
  }
}

// Define mediaData variable
let mediaData;

// Fetch media data
async function fetchMediaData() {
  const params = new URLSearchParams(window.location.search);
  const photographerId = params.get('id');
  const dataFetcher = new DataFetcher();
  const media = await dataFetcher.fetchMediaData(photographerId);
  return media;
}

// Assign value to mediaData variable
fetchMediaData().then(media => {
  mediaData = media;
  console.log('this is the metada',mediaData);

  // Create an instance of the DropdownAdapter class
  const dropdownAdapter = new DropdownAdapter(
    'dropdown-container',
    mediaData,
    lightbox,
    mediaFactory,
    DataFetcher
  );

  // Add options to the dropdown menu
  const optionsData = [
    {id: "popularité", text: "Popularité", ariaLabel: "Filter by popularity"},
    {id: "date", text: "Date", ariaLabel: "Filter by date"},
    {id: "titre", text: "Titre", ariaLabel: "Filter by title"}
  ];

  const options = dropdownAdapter.addOptions(optionsData);
  // Set the default option in the dropdown to "Popularité"
  const defaultOption = options.find(option => option.id === 'popularité');
  defaultOption.click();
const dropdownBtnText = document.getElementById('dropdownBtnText');
dropdownBtnText.innerText = defaultOption.id;
defaultOption.classList.add('hidden');
// Filter media based on default value
console.log('filterMedia function called')
dropdownAdapter.filterMedia(defaultOption.id);
  // Add event listeners to the options
  options.forEach(option => {
    option.addEventListener('click', () => {
      // Update the text of the dropdown button
      const dropdownBtnText = document.getElementById('dropdownBtnText');
      dropdownBtnText.innerText = option.id;

      // Hide the selected option and show all other options
      options.forEach(opt => opt.classList.remove('hidden'));
      option.classList.add('hidden');

      // Filter media based on selected value
      dropdownAdapter.filterMedia(option.id);
    });
  });
});


/*
This code defines a DropdownAdapter class that can be used to create a dropdown filter for media. 
The DropdownAdapter class takes several arguments when creating an instance of it, including 
dropContainerId, mediaData, lightbox, mediaFactory, and DataFetcher. 
These arguments are used to customize the behavior of the dropdown filter.

The DropdownAdapter class has several methods, including a constructor, a filterMedia method, and an addOptions method.
The constructor is called when creating an instance of the DropdownAdapter class and is used to set up the initial state of
 the dropdown filter. The filterMedia method is used to filter media based on the selected value in the dropdown menu.
  The addOptions method is used to add options to the dropdown menu.

The code also defines several variables and functions outside of the DropdownAdapter class.
These include the mediaData variable, the fetchMediaData function, and several event listeners for the options in the dropdown menu.
The mediaData variable is used to store media data that is fetched by calling the fetchMediaData function. 
The event listeners for the options in the dropdown menu are used to update the text of the dropdown button
and filter media based on the selected value when an option is clicked.
*/
