import React, { Component, PropTypes } from 'react';
import ListItem from './ListItem';
import { addItem, userInput } from '../reducers/GroceryReducer';

class List extends React.Component {
  static propTypes = {
    addGroceryItem: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleAddItem(e) {
    const { addGroceryItem, text } = this.props;
    addGroceryItem(text);
  }

  handleDeleteItem(e) {
    
  }

  handleOnChange(e) {
    const { getInput } = this.props;
    getInput(e.target.value);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" onChange={this.handleOnChange}/>
          <button>Add</button>
        </div>
        <div>
          <ul>
            <ListItem />
          </ul>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(List);
