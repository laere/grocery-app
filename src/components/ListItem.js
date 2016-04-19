import React, { Component, PropTypes } from 'react';
import Button from './Button';

const ListItem = ({ item }) => {
  return (
    <div>
      <span>{item.text}</span>
      <span>{item.date}</span>
      <Button icon="fa fa-check fa-lg"/>
      <Button icon="fa fa-times fa-lg"/>
    </div>
  );
}

export default ListItem;
