/*This is a JavaScript function named photographerFactory that takes an object data as an argument. 
The function uses destructuring to extract the name and portrait properties from the data object. 
It then creates a variable picture that stores the path to the portrait image.

The function also defines an inner function named getUserCardDOM, 
which creates an HTML article element and appends an img element and an h2 element to it. 
The img element’s src attribute is set to the value of the picture variable, 
and the text content of the h2 element is set to the value of the name variable. 
The inner function returns the created article element.

Finally, the photographerFactory function returns an object containing the properties name, picture, and getUserCardDOM.
The value of the getUserCardDOM property is a reference to the inner function. */

function photographerFactory(data) {
    const { name, portrait ,city,country,tagline,price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const location = document.createElement('p');
        const tagline_tag = document.createElement('p');
        const price_tag = document.createElement('p');
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        h2.textContent = name;
        location.textContent = `${country} , ${city}`;
        location.classList.add('location');
        tagline_tag.textContent = tagline;
        tagline_tag.classList.add('tagline');
        price_tag.textContent = `${price}€/jour'`;
        price_tag.classList.add('price');
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tagline_tag);
        article.appendChild(price_tag);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}