import {combineReducers} from 'redux';
import {randomProduct} from './randomReducer';

const rootReducer = combineReducers ({
    randomProduct,
    galleryArr: galleryArr,
});

export default rootReducer;