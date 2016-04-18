import React, { Component, PropTypes } from 'react';
import ListItem from './ListItem';

export default class List extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" />
          <button>Add</button>
        </div>
        <div>
          <ul>
            <ListItem />
          </ul>
        </div>
      </div>
    );
  }
}
