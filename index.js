import imgGallery from './gallery-items.js'
console.log(imgGallery);
const list = document.querySelector('.js-gallery');
const div = document.querySelector('.js-lightbox');
const modalImg = document.querySelector('.lightbox__image')
const btn = document.querySelector('.lightbox__button')

// { <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />
//   </a>
// </li> }

imgGallery.map((item) => {
  const img = document.createElement('img');
  const link = document.createElement('a');
  const itemLi = document.createElement('li')

  img.classList.add('gallery__image');
  img.src = item.preview;
  img.setAttribute('data-source', item.original);
  img.alt = item.description;
  
  link.classList.add('gallery__link')
  link.href = item.original;
  itemLi.classList.add('gallery__item');
  link.append(img);
  itemLi.append(link);
  list.append(itemLi)
})

list.addEventListener('click', (e) =>{
e.preventDefault();
let modalLink = e.target.dataset.source;
div.classList.add('is-open');
modalImg.src = modalLink;
});
btn.addEventListener('click', () => {
  div.classList.remove('is-open');
  modalImg.src = '';
});