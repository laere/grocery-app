import React, { Component, PropTypes } from 'react';

const InputManager = ({ onChange, addItem, clearInput, text }) => {
  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" value={text} onChange={onChange}/>
        <button>
          <i className="fa fa-plus fa-lg"></i>
        </button>
        <button onClick={clearInput}>
          <i className="fa fa-trash fa-lg"></i>
        </button>
      </form>
    </div>
  );
};

InputManager.propTypes = {
  onChange: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default InputManager;
