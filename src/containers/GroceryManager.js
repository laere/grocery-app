import React, { Component, PropTypes } from 'react';
import InputManager from '../components/InputManager';
import GroceryList from '../components/GroceryList';
import { addItem, userInput } from '../reducers/GroceryReducer';

class GroceryManager extends React.Component {
  static propTypes = {
    addGroceryItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem(e) {
    const { addGroceryItem, text } = this.props;
    addGroceryItem(text);
  }

  handleDeleteItem(e) {
    return;
  }

  handleOnChange(e) {
    const { getInput } = this.props;
    getInput(e.target.value);
  }

  render() {
    return (
      <div>
        <InputManager />
        <GroceryList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    text: state.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addGroceryItem: (text) => dispatch(addItem(text)),
    getInput: (input) => dispatch(userInput(input))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryManager);
