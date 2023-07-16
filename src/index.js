import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// import Redux dependencies
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'

// Reducers
const feelings = (state = '', action) => {
    if (action.type === 'COLLECT_FEELINGS') {
        return action.payload
    }
    return state
}

const understanding = (state = '', action) => {
    if (action.type === 'COLLECT_SUPPORT'){
        return action.payload
    }
    return state
}

// Store to keep track of state
const store = createStore(
    combineReducers({
        feelings,
        understanding
    }),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
