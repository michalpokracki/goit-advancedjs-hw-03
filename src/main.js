// Import the iziToast library
import iziToast from 'izitoast';
// Import styles for iziToast
import 'izitoast/dist/css/iziToast.min.css';

// Import the custom fetch function
import { fetchFunction } from './js/pixabay-api.js';

// Get references to DOM elements
const searchButton = document.querySelector('button');
const inputBar = document.querySelector('input');

// Add event listener to the search button
searchButton.addEventListener('click', () => {
  // Disable the button to prevent multiple submissions
  searchButton.disabled = true;

  // Check if the input bar is empty
  if (!inputBar.value.trim()) {
    // Show an error toast if the input is empty
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search value.',
      position: 'topRight',
    });
    // Re-enable the button
    searchButton.disabled = false;
  } else {
    // Call the fetch function with the input value
    fetchFunction(inputBar.value.trim())
      .then(() => {
        // Optionally, show a success toast or perform additional actions
        iziToast.success({
          title: 'Success',
          message: 'Search completed successfully.',
          position: 'topRight',
        });
      })
      .catch(error => {
        // Handle errors from the fetch function
        iziToast.error({
          title: 'Error',
          message: `An error occurred: ${error.message}`,
          position: 'topRight',
        });
      })
      .finally(() => {
        // Re-enable the button after the fetch is complete
        searchButton.disabled = false;
      });
  }
});
