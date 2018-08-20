import { combineReducers } from 'redux';
import gallery from './galleryReducer'
import beerpage from './beerPageReducer';
import foodform from './foodFormReducer';

import {randomProduct} from './randomReducer';
import {sliderReducer} from "./sliderReducer";
import favorites from './favoriteReducer';
import mobMenuExpanded from './mobileMenuReducer';

const rootReducer = combineReducers ({
    gallery,
    beerpage,
    foodform,
    randomProduct,
    sliderReducer,
    favorites,
    mobMenuExpanded,
});

export default rootReducer;