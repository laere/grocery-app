import React, { Component, PropTypes } from 'react';
import InputManager from '../components/InputManager';
import { connect } from 'react-redux';
import { addItem, userInput, clear } from '../actions/actions';
import shortid from 'shortid';

const url = 'https://zacksgroceryapp.firebaseio.com/grocerylist',
      groceryListRef = new Firebase(url);

class InputManagerContainer extends React.Component {
  static propTypes = {
    addGroceryItem: PropTypes.func.isRequired,
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
    const { addGroceryItem, groceryText } = this.props;
    groceryListRef.push({
      id: shortid.generate(),
      text: groceryText,
      date: new Date().toLocaleString(),
      isComplete: false
    })
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
        text={this.props.groceryText}
        onChange={this.handleOnChange}
        addItem={this.handleAddItem}
        clearInput={this.handleClearInput}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groceryText: state.inputChange,
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addGroceryItem: (itemData) => dispatch(addItem(itemData)),
    getInput: (input) => dispatch(userInput(input)),
    clearInput: () => dispatch(clear())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputManagerContainer);
