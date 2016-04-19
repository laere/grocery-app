import { combineReducers } from 'redux';
import { items, inputChange } from './GroceryReducer';

const rootReducer = combineReducers({
  items,
  inputChange
});

export default rootReducer;
