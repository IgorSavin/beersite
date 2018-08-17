import {combineReducers} from 'redux';
import {randomProduct} from './randomReducer';
import gallery from './galleryReducer';
import favorites from './favoriteReducer';
import mobMenuExpanded from './mobileMenuReducer';

const rootReducer = combineReducers ({
    randomProduct,
    gallery,
    favorites,
    mobMenuExpanded,
});

export default rootReducer;