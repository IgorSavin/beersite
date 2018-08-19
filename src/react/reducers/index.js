import { combineReducers } from 'redux';
import gallery from './galleryReducer'
import beerpage from './beerPageReducer';
import foodform from './foodFormReducer';


const rootReducer = combineReducers ({
    gallery, beerpage, foodform
});


export default rootReducer;