import { combineReducers } from 'redux';
import user from './userReducer';
import categories from './categoriesReducer';
import items from './itemsReducer';
import booking from './bookingReducer';

const rootReducer = combineReducers({
  user,
  categories,
  items,
  booking,
});

export default rootReducer;
