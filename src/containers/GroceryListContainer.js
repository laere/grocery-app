import React, { Component, PropTypes } from 'react';
import GroceryList from '../components/GroceryList';
import { connect } from 'react-redux';
import { deleteItem, completeItem, renderItems } from '../actions/actions';
import { groceryListRef } from '../firebase/utils';

class GroceryListContainer extends React.Component {
  static propTypes = {
    deleteGroceryItem: PropTypes.func.isRequired,
    completeGroceryItem: PropTypes.func.isRequired,
    renderGroceryItems: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleCompleteItem = this.handleCompleteItem.bind(this);
  }

  componentDidMount() {
    const { renderGroceryItems } = this.props;
    groceryListRef.on('value', snap => {
      renderGroceryItems(snap.val());
    })
  }

  handleDeleteItem(key, id) {
    const { deleteGroceryItem } = this.props;
    groceryListRef.child(key).remove();
    deleteGroceryItem(id);
  }

  handleCompleteItem(key, id) {
    groceryListRef.child(key).update({isComplete: true});
    const { completeGroceryItem } = this.props;
    completeGroceryItem(id);
  }

  render() {
    const { items } = this.props;
    return (
      <GroceryList
        completeItem={this.handleCompleteItem}
        deleteItem={this.handleDeleteItem}
        items={items}/>
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
    completeGroceryItem: (id) => dispatch(completeItem(id)),
    renderGroceryItems: (items) => dispatch(renderItems(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryListContainer);
