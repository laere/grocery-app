import { combineReducers } from 'redux';
import { items, inputChange } from './GroceryReducer';
import { firebaseStateReducer } from 'redux-react-firebase'

const rootReducer = combineReducers({
  items,
  inputChange,
  firebase: firebaseStateReducer
});

export default rootReducer;
