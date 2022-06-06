import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML('beforeend', createImageGalleryMarkup(galleryItems));

function createImageGalleryMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
        })
        .join("");
}

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }
    
    const instance = basicLightbox.create(`<img class="modal" src="${evt.target.dataset.source}" width="800" heigth="600"></img>`);

    instance.show();

    window.addEventListener('keydown', onEscPress);
    
    function onEscPress(event) {
    
        if (event.code === "Escape") {
            instance.close();
            document.removeEventListener('keydown', onEscPress);
        }
    }
}


