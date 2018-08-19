import axios from 'axios';
const galleryHandler =(arr)=>({type: 'GALLERY_FETCH', data: arr});

const END_POINT = 'https://api.punkapi.com/v2/beers?';

const getGallery=()=>axios.get(`${END_POINT}page=3&per_page=72`).then(data=>data.status === 200? data.data: null).catch(error=>console.log('error text: ',error));

export const getFilterBeer =(first,second)=> ({ type:"FILTER_DATA", firstParam:first, secondParam:second});

export const getGalleryAsync=()=> dispatch=>{
    getGallery().then(data=>dispatch(galleryHandler(data)));
};

export const filterData=(f,s)=> dispatch=>{
    getGallery().then(data=>dispatch(galleryHandler(data))).then(()=> dispatch(getFilterBeer(f,s)));
};
