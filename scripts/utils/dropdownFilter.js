const dropContainer = document.getElementById('dropdown-container');
const dropdownWrapper = document.createElement('div');
dropdownWrapper.id = 'dropdownWrapper';
dropContainer.appendChild(dropdownWrapper);

const dropdownBtn = document.createElement('button');
dropdownBtn.id = 'DropBtn';
dropdownBtn.setAttribute('aria-label', 'Filter button');
dropdownWrapper.appendChild(dropdownBtn);

const toggleArrow = document.createElement('i');
toggleArrow.id = 'arrow';
toggleArrow.classList.add('bx', 'bx-chevron-down'); 
dropdownBtn.appendChild(toggleArrow);

const dropdownMenu = document.createElement('div');
dropdownMenu.id = 'dropdown';
dropdownMenu.className = "dropdown";
dropdownWrapper.appendChild(dropdownMenu);

const optionsData = [
  {id: "popularité", text: "Popularité", ariaLabel: "Filter by popularity"},
  {id: "date", text: "Date", ariaLabel: "Filter by date"},
  {id: "titre", text: "Titre", ariaLabel: "Filter by title"}
];

const options = [];

optionsData.forEach(optionData => {
  const option = document.createElement('a');
  option.id = optionData.id;
  option.innerText = optionData.text;
  option.setAttribute('aria-label', optionData.ariaLabel);
  dropdownMenu.appendChild(option);
  options.push(option);
});

// Toggle Dropdown function 
const toggleDropdown = function(){
    dropdownMenu.classList.toggle('show');
    toggleArrow.classList.toggle("arrow");
};

// toggle dropdown open . close when dropdown button is clicked 
dropdownBtn.addEventListener("click",function(e){
    e.stopPropagation();
    toggleDropdown();
});

const dropdownBtnText = document.createElement('span');
dropdownBtnText.id = 'dropdownBtnText';
dropdownBtn.insertBefore(dropdownBtnText, toggleArrow);
dropdownBtnText.innerText = 'Popularité';

// Fetch media data
async function fetchMediaData() {
    const params = new URLSearchParams(window.location.search);
    const photographerId = params.get('id');
    const dataFetcher = new DataFetcher();
    const media = await dataFetcher.fetchMediaData(photographerId);
    return media;
  }
  
  let mediaData;
  
  fetchMediaData().then(media => {
    mediaData = media;
    filterMedia('popularité');
  });

// Filter media based on selected value
function filterMedia(selectedValue) {
  if (selectedValue === 'popularité') {
    mediaData.sort((a, b) => b.likes - a.likes);
  } else if (selectedValue === 'date') {
    mediaData.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (selectedValue === 'titre') {
    mediaData.sort((a, b) => a.title.localeCompare(b.title));
  }
  
  // Update lightbox with filtered media
  if (lightbox) {
    lightbox.media = mediaData;
    lightbox.updateMediaElements();
  }
  
  // Update Gallery with filtered media
  mediaFactory(mediaData);
}

options.forEach(option => {
    option.addEventListener('click', () => {
      dropdownBtnText.innerText = option.id;
      options.forEach(opt => opt.classList.remove('hidden'));
      option.classList.add('hidden');
      filterMedia(option.id);
    });
});

// close dropdown when dom element is clicked 
document.documentElement.addEventListener("click",
function (){
    if(dropdownMenu.classList.contains("show")){
        toggleDropdown();
    }
});

/*
The script starts by selecting the dropContainer element and creating a dropdownWrapper element. The dropdownWrapper element is then appended to the dropContainer element.

Next, the script creates a dropdownBtn element and sets its id and aria-label attributes. The dropdownBtn element is then appended to the dropdownWrapper element.

The script then creates a toggleArrow element, sets its id, and adds the 'bx' and 'bx-chevron-down' classes to it. The toggleArrow element is then appended to the dropdownBtn element.

The script creates a dropdownMenu element, sets its id and className, and appends it to the dropdownWrapper element.

The script defines an array of objects called optionsData. Each object in this array represents an option in the dropdown menu and contains data such as the option’s id, text, and ariaLabel.

The script then uses a forEach loop to iterate over the optionsData array. For each object in the array, the script creates an option element, sets its properties using the data from the object, appends it to the dropdownMenu element, and adds it to an array called options.

The script defines a function called toggleDropdown. This function toggles the 'show' class on the dropdownMenu element and the 'arrow' class on the toggleArrow element.

The script adds an event listener to the dropdownBtn element that listens for "click" events. When a "click" event is detected, the event listener calls the toggleDropdown function to toggle the visibility of the dropdown menu.

The script creates a dropdownBtnText element, sets its properties, and inserts it before the toggleArrow element in the DOM. This element displays the currently selected option in the dropdown menu.

The script defines an asynchronous function called fetchMediaData. This function uses a URLSearchParams object to get the value of the 'id' parameter from the URL’s query string. It then creates a new instance of a class called DataFetcher and calls its fetchMediaData method with photographerId as an argument. Finally, it returns media data fetched by this method.

The script declares a variable called mediaData and assigns it an initial value of undefined.

The script calls fetchMediaData function and uses .then() method to assign media data returned by this function to mediaData variable when it becomes available.

The script defines a function called filterMedia that takes one argument: selectedValue. This function filters mediaData based on selectedValue using sort method of Array.prototype.

If lightbox is defined, this function updates lightbox.media property with filtered media data and calls lightbox.updateMediaElements method.

This function also calls mediaFactory function with filtered media data as an argument.

The script uses forEach method of options array to add click event listeners to each option in this array.

When an option is clicked, its click event listener updates innerText property of dropdownBtnText with id property of clicked option, removes hidden class from all options except clicked option using forEach method of options array, adds hidden class to clicked option using classList.add method, and calls filterMedia function with id property of clicked option as an argument.

Finally, this script adds click event listener to document.documentElement that listens for click events on any DOM elements except dropdownBtn.

When such click event is detected and if dropdownMenu has show class (i.e., if dropdown menu is visible), this event listener calls toggleDropdown function to hide dropdown menu.
*/
