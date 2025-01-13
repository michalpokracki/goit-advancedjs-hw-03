import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderPhotos } from './render-functions.js';

const API_KEY = '48209016-7672759296474ae520e3053db';
const BASE_URL = 'https://pixabay.com/api/';
const searchButton = document.querySelector('button');
const loader = document.querySelector('span');

export async function fetchFunction(
  q,
  image_type = 'photo',
  orientation = 'horizontal',
  safesearch = true
) {
  try {
    loader.style.display = 'inline-block';
    searchButton.disabled = true;

    const params = new URLSearchParams({
      key: API_KEY,
      q: q,
      image_type: image_type,
      orientation: orientation,
      safesearch: safesearch,
    });

    const response = await fetch(`${BASE_URL}?${params}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.totalHits > 0) {
      data.hits.forEach(
        ({
          largeImageURL,
          previewURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          renderPhotos(
            largeImageURL,
            previewURL,
            tags,
            likes,
            views,
            comments,
            downloads
          );
        }
      );
    } else {
      iziToast.error({
        title: 'Error',
        message: 'No results for this search',
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Failed to fetch images: ${error.message}`,
      position: 'topRight',
    });
  } finally {
    searchButton.disabled = false;
    loader.style.display = 'none';
  }
}
