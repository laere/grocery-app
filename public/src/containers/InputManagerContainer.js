import React, { Component, PropTypes } from 'react';
import InputManager from '../components/InputManager';
import { connect } from 'react-redux';
import { userInput, clear } from '../actions/actions';
import shortid from 'shortid';

const url = 'https://zacksgroceryapp.firebaseio.com/grocerylist',
      groceryListRef = new Firebase(url);

class InputManagerContainer extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    getInput: PropTypes.func.isRequired,
    clearInput: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
  }

  handleAddItem(e) {
    e.preventDefault();
    const { addGroceryItem, text } = this.props;
    groceryListRef.push({
      id: shortid.generate(),
      text,
      date: new Date().toLocaleString(),
      isComplete: false
    })
    this.handleClearInput();
  }

  handleOnChange(e) {
    const { getInput } = this.props;
    getInput(e.target.value);
  }

  handleClearInput(e) {
    const { clearInput } = this.props;;
    clearInput();
  }

  render() {
    return (
      <InputManager
        text={this.props.text}
        onChange={this.handleOnChange}
        addItem={this.handleAddItem}
        clearInput={this.handleClearInput}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.inputChange,
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInput: (input) => dispatch(userInput(input)),
    clearInput: () => dispatch(clear())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputManagerContainer);
