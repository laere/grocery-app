
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
  // itemIds: [],
  // itemsById: {},
  groceryItem: {
    id: 0,
    text: null,
    receivedAt: null,
    isComplete: false
  }
}

function items(state = initialState, action) {
  switch(action.type) {
    case actions.ADD_ITEM:
      return {
        ...state,
        items: state.items.concat({
          groceryItem: {
            ...state,
            itemId: state.id++,
            text: action.text,
            receivedAt: Date.now(),
            isComplete: false
          }
        })
      }
    case actions.DELETE_ITEM:
      return state;
    default:
      return state;
  }
}

function completeItem(state = initialState.groceryItem.isComplete, action) {
  switch(action.type) {
    case actions.COMPLETE_ITEM:
      return state;
  }
}

function changeInput(state = initialState.groceryItem.text, action) {
  switch(action.type) {
    case actions.GET_INPUT:
      return state;
  }
}
