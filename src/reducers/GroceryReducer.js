import dotProp from 'dot-prop-immutable';
import { findIndex } from 'lodash';
import * as actions from '../actions/actions';

let nextId = 0;

export function items(state = [], action) {
  // const rootRef = 'https://zacksgroceryapp.firebaseio.com/';
  // const listRef = new Firbase(rootRef + 'grocerylist');
  const index = _.findIndex(state, x => x.id === action.id);
  switch(action.type) {
    case actions.RENDER_ITEMS:
      return state.concat(action.items);
    // case actions.ADD_ITEM:
    //   return state.concat({
    //       text: action.text,
    //       id: nextId++,
    //       date: new Date().toLocaleString(),
    //       isComplete: false
    //     })
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
