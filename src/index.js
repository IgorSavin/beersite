import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, {history} from './react/store/store';
import { ConnectedRouter } from 'connected-react-router';
import './index.css';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));