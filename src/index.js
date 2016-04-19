import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//  STORE METHODS
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// MIDDLEWARE
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';
// ROUTING METHODS
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// CONTAINERS
import App from './app/app';
// REDUCERS
import rootReducer from './reducers/RootReducer';
// Store with middleware.
const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f;

const createStoreWithMiddleware = compose(
  applyMiddleware(Thunk, Promise),
  devTools
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
