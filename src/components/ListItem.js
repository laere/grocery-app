import React, { Component, PropTypes } from 'react';
import Button from './Button';

const ListItem = () => {
  return (
    <div>
      <span>This is a list item</span>
      <Button icon="fa fa-check fa-lg"/>
      <Button icon="fa fa-times fa-lg"/>
    </div>
  );
}

export default ListItem;
