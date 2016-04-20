import React, { Component, PropTypes } from 'react';

const InputManager = ({ onChange, addItem }) => {
  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" onChange={onChange}/>
        <button>
          <i className="fa fa-plus fa-lg"></i>
        </button>
        <button>
          <i className="fa fa-trash fa-lg"></i>
        </button>
      </form>
    </div>
  );
};

export default InputManager;
