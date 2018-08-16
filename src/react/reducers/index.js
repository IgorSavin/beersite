import { combineReducers } from 'redux';
import gallery from './galleryReducer'
import filterData from './filterDataReducer'


const rootReducer = combineReducers ({
    gallery, filterData,
});

export default rootReducer;