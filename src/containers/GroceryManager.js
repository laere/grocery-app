import React, { PropTypes } from 'react';
import InputManager from '../components/InputManager';
import GroceryList from '../components/GroceryList';
import { connect } from 'react-redux';
import { addItem, userInput, deleteItem } from '../actions/actions';

class GroceryManager extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }





  render() {
    
    return (
      <div>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryManager);
