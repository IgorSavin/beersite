import { combineReducers } from 'redux';
import busket from '../reducers/busketReducer';
import isActiveBusket from '../reducers/isActiveReducers';
import gallery from './galleryReducer'
import priceBusket from './priceBusketReducer';
import totalBusket from './totalBusketReducer';
import galleryArr from './galleryReducer'

const rootReducer = combineReducers ({
    busket,
    isActiveBusket: isActiveBusket,
    gallery: galleryArr,
    priceBusket,
    // totalBusket,
});

export default rootReducer;