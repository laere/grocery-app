import React, { Component, PropTypes } from 'react';
import GroceryList from '../components/GroceryList';
import { connect } from 'react-redux';
import { deleteItem, completeItem, renderItems } from '../actions/actions';
import Firebase from 'firebase';

class GroceryListContainer extends React.Component {
  static propTypes = {
    deleteGroceryItem: PropTypes.func.isRequired,
    completeGroceryItem: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleCompleteItem = this.handleCompleteItem.bind(this);
  }

  componentDidMount() {

    const { renderGroceryItems } = this.props,
          url = 'https://zacksgroceryapp.firebaseio.com/',
          groceryListRef = new Firebase(url + 'grocerylist');
    groceryListRef.on('value', (snap) => {
      renderGroceryItems(snap.val());
    })
  }

  handleDeleteItem(id) {
    const { deleteGroceryItem } = this.props;
    deleteGroceryItem(id);
  }

  handleCompleteItem(id) {
    console.log('complete func!!!!!');
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
