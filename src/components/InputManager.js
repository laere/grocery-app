import React, { Component, PropTypes } from 'react';

const InputManager = ({ onChange, addItem }) => {
  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" onChange={onChange}/>
        <button>Add</button>
      </form>
    </div>
  );
};

export default InputManager;
