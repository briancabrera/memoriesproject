import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'

import App from './App.js';
import "./index.css"

import reducer from "./reducers/posts.js"


const store = createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);