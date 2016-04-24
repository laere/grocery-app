import dotProp from 'dot-prop-immutable';
import { findIndex } from 'lodash';
import * as actions from '../actions/actions';

let nextId = 0;

export function items(state = [], action) {
  // const rootRef = 'https://zacksgroceryapp.firebaseio.com/';
  // const listRef = new Firbase(rootRef + 'grocerylist');
  const index = _.findIndex(state, x => x.id === action.id),
        url = 'https://zacksgroceryapp.firebaseio.com/',
        groceryListRef = new Firebase(url + 'grocerylist');
  switch(action.type) {
    case actions.RENDER_ITEMS:
      return state.concat(action.items);
    // case actions.ADD_ITEM:
    //   return groceryListRef.on('child_added', snap => {
    //     state.push(snap.value())
    //   });
    //   return state;
    case actions.DELETE_ITEM:
      return dotProp.delete(state, `${index}`);
    case actions.COMPLETE_ITEM:
      return dotProp.set(state, `${index}.isComplete`, true);
    default:
      return state;
  }
}

export function inputChange(state = '', action) {
  switch(action.type) {
    case actions.GET_INPUT:
      return action.input
    case actions.CLEAR_INPUT:
      return action.payload;
    default:
      return state;
  }
}
