async function initFilter() {
    const params = new URLSearchParams(window.location.search);
    const photographerId = params.get('id');
    const dataFetcher = new DataFetcher();
    const media = await dataFetcher.fetchMediaData(photographerId);
    const dropdownContainer = document.getElementById('dropdown-container');
  
    // create a label element for the select element
    const selectLabel = document.createElement('label');
    selectLabel.setAttribute('for', 'filter-select');
    selectLabel.textContent = 'Trier par:';
  
    // create a select element
    const select = document.createElement('select');
    select.id = 'filter-select';
    select.setAttribute('aria-label', 'Filter select');
  
    // create options for the select element
    const popularityOption = document.createElement('option');
    popularityOption.value = 'popularity';
    popularityOption.text = 'Popularité';
  
    const dateOption = document.createElement('option');
    dateOption.value = 'date';
    dateOption.text = 'Date';
  
    const titleOption = document.createElement('option');
    titleOption.value = 'title';
    titleOption.text = 'Titre';
  
    // append options to the select element
    select.appendChild(popularityOption);
    select.appendChild(dateOption);
    select.appendChild(titleOption);
  
    // append label and select elements to the DOM
    dropdownContainer.appendChild(selectLabel);
    dropdownContainer.appendChild(select);
  
    // add event listener to the select element
    select.addEventListener('change', (event) => {
      // get the selected value
      const selectedValue = event.target.value;
  
      // filter media based on the selected value
      if (selectedValue === 'popularity') {
        media.sort((a, b) => b.likes - a.likes);
      } else if (selectedValue === 'date') {
        media.sort((a, b) => new Date(a.date) - new Date(b.date));
      } else if (selectedValue === 'title') {
        media.sort((a, b) => a.title.localeCompare(b.title));
      }
      console.log('filtered media:', media);
  
      // Update lightbox with filtered media
      if (lightbox) {
        lightbox.media = media;
        lightbox.updateMediaElements();
      }
  
      // Update Gallery with filtered media
      mediaFactory(media);
    });
  }
  
  initFilter();
  