const actions = {
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  COMPLETE_ITEM: 'COMPLETE_ITEM'
};

const initialState = {
  items: [],
  input: '',
  isComplete: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case actions.ADD_ITEM:
      return state;
    case actions.DELETE_ITEM:
      return state;
    case actions.COMPLETE_ITEM:
      return state;
    default:
      return state;
  }
}
