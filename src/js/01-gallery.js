import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const imagesList = galleryItems
  .map(
    element =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${element.original}" onclick="event.preventDefault()">
      <img class="gallery__image"
      src="${element.preview}"      
      alt="${element.description}"          
    />
  </a>
</li>`
  )
  .join(''); // cтворення розмітки галереї

const imagesGallery = document.querySelector('.gallery');

imagesGallery.insertAdjacentHTML('afterbegin', imagesList); // рендер розмітки галереї (додати в DOM за одну операцію)

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // підпис малюнку
  captionPosition: 'bottom', // місце виведення підпису малюнку
  captionDelay: 250, // затримка виведення підпису малюнку
}); // робота з галереєю через бібліотеку "lightbox"
