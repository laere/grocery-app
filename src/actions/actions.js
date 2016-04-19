export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const COMPLETE_ITEM = 'COMPLETE_ITEM';
export const GET_INPUT = 'GET_INPUT';

export const addItem = (text) => {
  return (dispatch) => {
    dispatch({
      type: ADD_ITEM,
      text
    })
  }
}

export const deleteItem = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_ITEM,
      id
    })
  }
}

export const userInput = (input) => {
  return {
    type: GET_INPUT,
    input
  }
}
