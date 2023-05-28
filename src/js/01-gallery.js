// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEL = document.querySelector('.gallery');

const imagesList = ({preview, original, description}) => {
    return `  <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
            </a>`;
  };

const addImg = galleryItems.map(imagesList).join('');
galleryEL.insertAdjacentHTML("afterbegin", addImg);

galleryEL.addEventListener('click', onImgClick );

function onImgClick (event){
const imageSelected = event.target.getAttribute("data-source");
  
event.preventDefault();

if (!imageSelected){return;}
};

new SimpleLightbox(".gallery a", {captionDelay: 250 });