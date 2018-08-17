import { combineReducers } from 'redux';
import beerpage from './beerPageReducer';
import foodform from './foodFormReducer';
import foodfilter from './foodFilterReducer';


const rootReducer = combineReducers ({
    beerpage, foodfilter, foodform
});

export default rootReducer;