import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);
let instance;

const createGallery = (galleryItems) => {
  return galleryItems.map(({ original, preview, description}) => `<div class="gallery__item"> <a class="gallery__link" 
  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a></div>`).join('');
};

gallery.insertAdjacentHTML('beforeend', createGallery(galleryItems));


const onGalleryItemClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== `IMG`) {
    return;
  }
  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`, {
  onShow: (instance) => {window.addEventListener('keydown', onEscKeyPress)},
  onClose: (instance) =>{window.removeEventListener('keydown', onEscKeyPress)}
})

  instance.show()
};

gallery.addEventListener(`click`, onGalleryItemClick);

function onModalClose(){
  instance.close();
}

function onEscKeyPress(event) {
  if (event.code === "Escape") {
    onModalClose();
    
  }
}



