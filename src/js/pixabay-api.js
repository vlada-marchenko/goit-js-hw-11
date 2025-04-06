import axios from "axios"
import createMarkup, { gallery, clearGallery, renderGallery, showLoader, hideLoader } from './render-functions.js';


export default function request(query) {
    if(!query) {
        return Promise.resolve([])
    }

    return axios.get('https://pixabay.com/api/', {
        params: {
        key: '48786073-6183322621e5d0cfd6fc221bb',
        q: query.toLowerCase(),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true'
        }
    })
    .then((res) => {
        return res.data.hits
    })
    .catch((err) => {
        return []
})
}