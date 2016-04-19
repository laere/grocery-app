import dotProp from 'dot-prop-immutable';
import shortid from 'shortid';

const actions = {
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  COMPLETE_ITEM: 'COMPLETE_ITEM',
  GET_INPUT: 'GET_INPUT'
};


export const addItem = (text, id) => {
  return (dispatch) => {
    dispatch({
      type: actions.ADD_ITEM,
      text,
      id
    })
  }
}

export const userInput = (input) => {
  return {
    type: actions.GET_INPUT,
    input
  }
}

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
