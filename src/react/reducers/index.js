import {combineReducers} from 'redux';
import {randomProduct} from './randomReducer';
import galleryArr from './galleryReducer'

const rootReducer = combineReducers ({
    randomProduct,
    galleryArr: galleryArr,
});

export default rootReducer;