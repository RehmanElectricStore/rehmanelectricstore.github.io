import "./styles.css";
import logo from './assets/img/logo.png';
import search from './assets/img/search.png';

// ------ LOAD IMAGES ------ START--- //
const logoImgDiv = document.getElementById('logo').src = logo
const searchIcon = document.getElementById('search-icon').src = search
// ------ LOAD IMAGES ------ END--- //


// ------ Filter Buttons Styling ------ START--- //
// Select all buttons in the group
const filterButtons = document.querySelectorAll('.category')
let previousButton = document.querySelector('#filter-slider > button:first-of-type');

// Add event listener to each button
filterButtons.forEach(function(filterButton) {
  filterButton.addEventListener('click', function() {
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
