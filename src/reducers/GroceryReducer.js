import dotProp from 'dot-prop-immutable';
import { findIndex } from 'lodash';
import * as actions from '../actions/actions';

let nextId = 0;

export function items(state = [], action) {
  switch(action.type) {
    case actions.ADD_ITEM:
      return state.concat({
        text: action.text,
        id: nextId++,
        date: new Date().toLocaleString(),
        isComplete: false
      })
    case actions.DELETE_ITEM:
      return state;
    case actions.COMPLETE_ITEM:
      return state;
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

export function itemIds(state = [], action) {
  switch(action.type) {
    case actions.ADD_ITEM:
      return state;
    default:
      return state;
  }
}
