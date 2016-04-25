import dotProp from 'dot-prop-immutable';
import { findKey } from 'lodash';
import * as actions from '../actions/actions';

export function items(state = {}, action) {
  const index = _.findKey(state, x => x.id === action.id);
  switch(action.type) {
    case actions.RENDER_ITEMS:
      return {...state, ...action.groceryitems}
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
