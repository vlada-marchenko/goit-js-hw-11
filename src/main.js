import request, { input } from "./js/pixabay-api.js";
import createMarkup, { gallery } from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const button = document.querySelector('.button')
const form = document.querySelector('.form')
const loader = document.querySelector('.loader')
let lightbox = new SimpleLightbox('.pics a')

form.addEventListener('submit', handleSubmit)

function handleSubmit(evt) {
    evt.preventDefault()

    loader.style.display = 'block'

    const query = input.value.trim()
    
    request(query)
    .then((data) => {

        gallery.innerHTML = ''

        if (data.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return
        } 

            gallery.insertAdjacentHTML('beforeend', createMarkup(data));
            lightbox.refresh(); 

    })
    .catch((err) => console.error(err))
    .finally(() => {
        loader.style.display = 'none'
    })

    form.reset()
}