import React, { Component, PropTypes } from 'react';
import ListItem from './ListItem';

export default class GroceryLict extends Component {
  render() {
    return (
      <div>
        {this.props.items.map(item => <ListItem key={item.id} item={item}/>)} 
      </div>
    );
  }
}
