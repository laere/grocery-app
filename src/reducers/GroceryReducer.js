import dotProp from 'dot-prop-immutable';
import { findIndex } from 'lodash';
import * as actions from '../actions/actions';
import shortid from 'shortid';

export function items(state = [], action) {
  const index = _.findIndex(state, x => x.id === action.id),
        url = 'https://zacksgroceryapp.firebaseio.com/grocerylist',
        groceryListRef = new Firebase(url);
  switch(action.type) {
    case actions.RENDER_ITEMS:
      return state.concat(action.items);
    case actions.ADD_ITEM:
      const item = {
          text: action.text,
          date: new Date().toLocaleString(),
          isComplete: false
        }
        groceryListRef.push(item);
        return state.concat(item);
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
