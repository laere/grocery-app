import React, { Component } from 'react';
import { GroceryListContainer, InputManagerContainer } from '../containers/containers';

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
