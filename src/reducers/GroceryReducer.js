import dotProp from 'dot-prop-immutable';
import shortid from 'shortid';
import * as actions from '../actions/actions';

const initialState = {
  items: []
}

export function items(state = initialState, action) {
  switch(action.type) {
    case actions.ADD_ITEM:
      state = state.concat({
        text: action.text,
        id: shortid.generate(),
        date: new Date().toLocaleString(),
        isComplete: false
      })
      return state;
    case actions.DELETE_ITEM:
      const index = state.indexOf(action.id)
      state = dotProp.delete(state, `state.${index}`);
      return state;
    default:
      return state;
  }
}

export function completeItem(state = initialState, action) {
  switch(action.type) {
    case actions.COMPLETE_ITEM:
      const index = state.items.indexOf(action.id);
      return state;
    default:
      return;
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
