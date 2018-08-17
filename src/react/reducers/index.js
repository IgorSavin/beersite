import { combineReducers } from 'redux';
import gallery from './galleryReducer'
import filterData from './filterDataReducer'
import beerpage from './beerPageReducer';
import foodform from './foodFormReducer';


const rootReducer = combineReducers ({
    gallery, filterData, beerpage, foodform
})


export default rootReducer;