import React, { Component, PropTypes } from 'react';
import Button from './Button';

const InputManager = ({ onChange, addItem }) => {
  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" onChange={onChange}/>
        <Button icon="fa fa-plus fa-lg" />
      </form>
    </div>
  );
};

export default InputManager;
