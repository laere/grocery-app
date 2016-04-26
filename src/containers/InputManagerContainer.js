import React, { Component, PropTypes } from 'react';
import InputManager from '../components/InputManager';
import { connect } from 'react-redux';
import { userInput, clear } from '../actions/actions';
import { groceryListRef } from '../firebase/utils';
import shortid from 'shortid';

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
    const { text } = this.props;
    if(text === '')
      return;
     else
      groceryListRef.push({
        id: shortid.generate(),
        text,
        date: new Date().toLocaleString(),
        isComplete: false
      });
      this.handleClearInput();
  }

  handleOnChange(e) {
    const { getInput } = this.props;
    getInput(e.target.value);
  }

  handleClearInput() {
    const { clearInput } = this.props;
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
    text: state.inputChange
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInput: (input) => dispatch(userInput(input)),
    clearInput: () => dispatch(clear())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputManagerContainer);
