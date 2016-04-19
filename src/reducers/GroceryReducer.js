import dotProp from 'dot-prop-immutable';
import shortid from 'shortid';
import * as actions from '../actions/actions';

export function items(state = [], action) {
  switch(action.type) {
    case actions.ADD_ITEM:
      state = state.concat({
        text: action.text,
        id: shortid.generate(),
        date: new Date().toLocaleString(),
        isComplete: false
      })
    default:
      return state;
  }
}

export function inputChange(state = '', action) {
  switch(action.type) {
    case actions.GET_INPUT:
      state = action.input;
      return state;
    default:
      return state;
  }
}

export function itemIds(state = [], action) {
  switch(action.type) {
    case actions.ADD_ITEM:
      state = state.items.map(x => x.id)
      return state;
  }
}
