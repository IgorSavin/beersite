import {combineReducers} from 'redux';
import {randomProduct} from './randomReducer';
import {sliderReducer} from "./sliderReducer";
import gallery from './galleryReducer';
import favorites from './favoriteReducer';
import mobMenuExpanded from './mobileMenuReducer';

const rootReducer = combineReducers ({
    randomProduct,
    sliderReducer,
    gallery,
    favorites,
    mobMenuExpanded,
});

export default rootReducer;