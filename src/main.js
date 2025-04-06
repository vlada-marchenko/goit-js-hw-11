
import createMarkup, { gallery, clearGallery, renderGallery, showLoader, hideLoader } from './js/render-functions.js';
import request  from './js/pixabay-api.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const button = document.querySelector('.button')
const input = document.querySelector('.input')
const form = document.querySelector('.form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(evt) {
    evt.preventDefault()

    const query = input.value.trim()

    if (query === '') {
        // iziToast.error({
        //     message: 'Sorry, there are no images matching your search query. Please try again!',
        // });
        return; 
    }

    showLoader();
    
    request(query)
    .then((data) => {
        clearGallery();

        if (data.length === 0) {
             iziToast.error({
                 message: 'Sorry, there are no images matching your search query. Please try again!',
             });
            return
        } 
        renderGallery(data);
    })
    .catch((err) =>  { 
        console.error(err)
        iziToast.error({
            message: 'Something went wrong. Please check your connection and try again.',
        })
    })

    .finally(() => {
        hideLoader();
    })

    form.reset()
}