import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const history = createBrowserHistory();
const store = createStore(connectRouter(history)(rootReducer), DevTools, applyMiddleware(thunk));

export default store;