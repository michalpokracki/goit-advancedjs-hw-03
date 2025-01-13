import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryLightbox = new SimpleLightbox('#gallery a', { captionDelay: 250 });

export function renderPhotos(
  url,
  previewURL,
  tag = 'No tags',
  likes = '0',
  views = '0',
  comments = '0',
  downloads = '0'
) {
  const gallery = document.querySelector('#gallery');

  // Clear gallery if it has more than 19 items
  if (gallery.childElementCount > 19) {
    gallery.innerHTML = '';
  }

  // Create gallery item structure using template literal
  const galleryItem = createGalleryItem({
    url,
    previewURL,
    tag,
    likes,
    views,
    comments,
    downloads,
  });

  gallery.insertAdjacentHTML('beforeend', galleryItem);
  galleryLightbox.refresh();
}

function createGalleryItem({
  url,
  previewURL,
  tag,
  likes,
  views,
  comments,
  downloads,
}) {
  const statsItems = [
    { label: 'Likes', value: likes },
    { label: 'Views', value: views },
    { label: 'Comments', value: comments },
    { label: 'Downloads', value: downloads },
  ];

  const statsHTML = statsItems
    .map(
      item => `
      <div>
        <h3>${item.label}</h3>
        <p>${item.value}</p>
      </div>
    `
    )
    .join('');

  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${url}">
        <img 
          class="gallery-image" 
          src="${previewURL}" 
          title="${tag}" 
          alt="${tag}"
        >
      </a>
      <div class="info">
        ${statsHTML}
      </div>
    </li>
  `;
}
