import './styles.css';
import logo from './assets/img/logo.png';
import search from './assets/img/search.png';
import productImage from './assets/img/product.png';
import home from './assets/img/home.png';
import getElectricItems from './modules/getElectricItems';

// ------ LOAD IMAGES ------ START--- //
const logoImgDiv = document.getElementById('logo');
logoImgDiv.src = logo;
const searchIcon = document.getElementById('search-icon');
searchIcon.src = search;
const productImages = document.querySelectorAll('.product-image');
const footerIcons = document.querySelectorAll('.footer-item-icon');
footerIcons.src = footerIcons;
// ------ LOAD IMAGES ------ END--- //

productImages.forEach((image) => {
  image.src = productImage;
});

footerIcons.forEach((footerIcon) => {
  footerIcon.src = home;
});

// ------ Filter Buttons Styling ------ START--- //
// Select all buttons in the group
const filterButtons = document.querySelectorAll('.category')
let previousButton = document.querySelector('#filter-slider > button:first-of-type');

// Add event listener to each button
filterButtons.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    // Remove "filter-category" class from the previously selected button
    previousButton.classList.remove('filter-category');
    // Add "filter-category" class to the clicked button
    filterButton.classList.add('filter-category');
    // Update the previously selected button
    previousButton = filterButton;
  })
})

// Set the first button as the active button on page load
const firstButton = document.querySelector('#filter-slider > button:first-of-type');
firstButton.classList.add('filter-category');
// ------ Filter Buttons Styling ------ END--- //


// Define an async function to get the data
(async function() {
  try {
    const res = await getElectricItems();
    const items = await res.items;
    items.forEach((product, index) => {
      const Products = document.querySelector('#products-grid');
      Products.innerHTML += `
        <div class="product">
          <div class="product-card">
            <img class="product-image" src=${res.includes.Asset[index].fields.file.url} alt='product-icon-${index}'></img>
          </div>
          <div class="product-info">
            <p class="product-name">${product.fields.productName}</p>
            <p class="product-price">$${product.fields.price}</p>
          </div>
        </div>
      `;
    });
  } catch (error) {
    console.error(error);
  }
})();

