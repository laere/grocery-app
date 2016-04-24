export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const COMPLETE_ITEM = 'COMPLETE_ITEM';
export const GET_INPUT = 'GET_INPUT';
export const CLEAR_INPUT = 'CLEAR_INPUT';
export const RENDER_ITEMS = 'RENDER_ITEMS';

export const renderItems = (items) => {
  return {
    type: RENDER_ITEMS,
    items
  }
}

export const addItem = (text) => {
  return {
    type: ADD_ITEM,
    text
  }
}

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id
  }
}

export const userInput = (input) => {
  return {
    type: GET_INPUT,
    input
  }
}

export const completeItem = (id) => {
  return {
    type: COMPLETE_ITEM,
    id
  }
}

export const clear = () => {
  return {
    type: CLEAR_INPUT,
    payload: ''
  }
}
