import React, { Component, PropTypes } from 'react';
import InputManager from '../components/InputManager';
import { connect } from 'react-redux';
import { addItem, userInput } from '../actions/actions';

class InputManagerContainer extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    addGroceryItem: PropTypes.func.isRequired,
    getInput: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem(e) {
    e.preventDefault();
    const { addGroceryItem, text } = this.props;
    if(text === '') return;
    addGroceryItem(text);
  }

  handleOnChange(e) {
    const { getInput } = this.props;
    getInput(e.target.value);
  }

  handleClearInput(e) {
    
  }

  render() {
    return (
      <InputManager
        onChange={this.handleOnChange}
        addItem={this.handleAddItem}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.inputChange
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addGroceryItem: (text) => dispatch(addItem(text)),
    getInput: (input) => dispatch(userInput(input))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputManagerContainer);
