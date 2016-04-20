import { combineReducers } from 'redux';
import { items, inputChange, itemIds } from './GroceryReducer';

const rootReducer = combineReducers({
  items,
  inputChange,
  itemIds
});

export default rootReducer;
