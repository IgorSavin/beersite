import { combineReducers } from 'redux';
import busket from '../reducers/busketReducer';
import isActiveBusket from '../reducers/isActiveReducers';

const rootReducer = combineReducers ({
    massItems: busket,
    isActiveBusket: isActiveBusket,

});

export default rootReducer;