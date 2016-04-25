import React, { Component, PropTypes } from 'react';
import Button from './Button';

const ListItem = ({ item, id, deleteItem }) => {
  return (
    <div key={id}>
      <span>{item.text}</span>
      <span>{item.date}</span>
      <button>
        <i className="fa fa-check fa-lg"></i>
      </button>
      <button onClick={(id) => deleteItem(id)}>
        <i className="fa fa-times fa-lg"></i>
      </button>
    </div>
  );
}

export default ListItem;
