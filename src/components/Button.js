import React, { Component, PropTypes } from 'react';

const Button = (props) => {
  return (
    <span>
      <button className={props.buttonStyle}>
        <i className={props.icon}></i>
      </button>
    </span>
  );
}

export default Button;
