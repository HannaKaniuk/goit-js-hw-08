// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

function createGalleryMarkup(items) {
    return items
        .map(
            (item) => `<li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img 
                        class="gallery__image"
                        src="${item.preview}"
                        data-source="${item.original}"
                        alt="${item.description}"
                    />
                </a>
            </li>`
        )
        .join('');
}

galleryList.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

const options = {
    captionsData: 'alt',
    captionDelay: 250,
};

const lightboxRef = new SimpleLightbox('.gallery__link', options);













    

