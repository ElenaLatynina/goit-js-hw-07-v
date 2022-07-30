import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(`.gallery`);

const createGallery = (galleryItems) => {
  return galleryItems.map(({ original, preview, description}) => `<div class="gallery__item"> 
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`).join('');
};

gallery.insertAdjacentHTML('beforeend', createGallery(galleryItems));
let lightbox = new SimpleLightbox('.gallery a', {
  captionType:`attr`,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
     
 });

