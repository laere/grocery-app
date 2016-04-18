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
import state from './reducers/GroceryReducer';
// Store with middleware.
const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f;

const createStoreWithMiddleware = compose(
  applyMiddleware(Thunk, Promise),
  devTools
)(createStore);

const store = createStoreWithMiddleware(state);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
