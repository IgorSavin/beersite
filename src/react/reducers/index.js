import { combineReducers } from 'redux';
import galleryArr from './galleryReducer'



const rootReducer = combineReducers ({
    galleryArr: galleryArr,
});

export default rootReducer;