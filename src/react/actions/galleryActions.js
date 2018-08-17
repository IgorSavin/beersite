import axios from "axios";

export const galleryHandler = (data) => ({
    type: 'GALLERY_FETCH',
    data
})

const url = `https://api.punkapi.com/v2/beers?page=2&per_page=12`

export const galleryAsync = () => dispatch => {
    return axios.get(`${url}`)
        .then(result => dispatch(galleryHandler(result.data)))
}