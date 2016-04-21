import React, { Component } from 'react';
import GroceryListContainer from '../containers/GroceryListContainer';
import InputManagerContainer from '../containers/InputManagerContainer';
import '../../scss/main.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputManagerContainer />
        <GroceryListContainer />
      </div>
    );
  }
}
