import {combineReducers} from 'redux';
import {randomProduct} from './randomReducer';
import gallery from './galleryReducer';
import favorites from './favoriteReducer';

const rootReducer = combineReducers ({
    randomProduct,
    gallery: gallery,
    favorites,
});

export default rootReducer;