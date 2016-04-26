import shortid from 'shortid';

//firebase references
const url = 'https://zacksgroceryapp.firebaseio.com/grocerylist';
export const groceryListRef = new Firebase(url);

//data pushed to firebase when item is added
export const itemData = {
  id: shortid.generate(),
  text: '',
  date: new Date().toLocaleString(),
  isComplete: false
}
