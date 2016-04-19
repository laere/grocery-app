import dotProp from 'dot-prop-immutable';

const actions = {
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  COMPLETE_ITEM: 'COMPLETE_ITEM',
  GET_INPUT: 'GET_INPUT'
};


export const addItem = (text) => {
  return (dispatch) => {
    dispatch({
      type: actions.ADD_ITEM,
      text
    })
  }
}

export const userInput = (input) => {
  return {
    type: actions.GET_INPUT,
    input
  }
}

const initialState = {
  items: [],
  id: 0,
  text: null,
  receivedAt: null,
  isComplete: false
}


export function items(state = initialState, action) {
  const date = new Date().toLocaleString();
  switch(action.type) {
    case actions.ADD_ITEM:
      return state;
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
