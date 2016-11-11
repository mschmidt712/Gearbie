import { combineReducers } from 'redux';
import user from './userReducer';
import categories from './categoriesReducer';

const rootReducer = combineReducers({
  user,
  categories,
});

export default rootReducer;
