import axios from 'axios';
const galleryHandler =(arr)=>({type: 'GALLERY', payload: arr});

const END_POINT = 'https://api.punkapi.com/v2/beers?';
const getGallery=()=>axios.get(`${END_POINT}page=1&per_page=60`).then(data=>data.status === 200? data.data: null).catch(error=>console.log('error text: ',error));

export const getGalleryAsync=()=> dispatch=>{
    getGallery().then(data=>dispatch(galleryHandler(data)));
};