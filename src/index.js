import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux';
import {store} from './store';
import {saveState} from './storage';
import throttle  from 'lodash/throttle';

store.subscribe( throttle(() => {
    saveState({
        id:store.getState().id,
        name:store.getState().name
    });
}, 1000))

ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>,
 document.getElementById('root'));

registerServiceWorker();
