import React, { PropTypes } from 'react';
import InputManager from '../components/InputManager';
import GroceryList from '../components/GroceryList';
import { connect } from 'react-redux';
import { addItem, userInput } from '../reducers/GroceryReducer';

class GroceryManager extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem(e) {
    e.preventDefault();
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
        <InputManager
          onChange={this.handleOnChange}
          addItem={this.handleAddItem}/>
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
