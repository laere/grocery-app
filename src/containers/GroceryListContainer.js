import React, { Component, PropTypes } from 'react';
import GroceryList from '../components/GroceryList';
import { connect } from 'react-redux';
import { deleteItem, completeItem } from '../actions/actions';

class GroceryListContainer extends React.Component {
  static propTypes = {
    items: PropTypes.object.isRequired,
    deleteGroceryItem: PropTypes.func.isRequired,
    completeGroceryItem: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleCompleteItem = this.handleCompleteItem.bind(this);
  }

  handleDeleteItem(e, id) {
    const { deleteGroceryItem } = this.props;
    deleteGroceryItem(id)
  }

  handleCompleteItem(e) {
    return;
  }

  render() {
    const { items } = this.props;
    return (
      <GroceryList
        items={items}
        deleteItem={this.handleDeleteItem}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteGroceryItem: (id) => dispatch(deleteItem(id)),
    completeGroceryItem: (id) => dispatch(completeItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryListContainer);
