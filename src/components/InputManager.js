import React, { Component, PropTypes } from 'react';

const InputManager = () => {
  return (
    <div>
      <form>
        <input type="text" onChange={this.handleOnChange}/>
        <button>Add</button>
      </form>
    </div>
  );
};

export default InputManager;
