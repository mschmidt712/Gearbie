import * as types from '../actions/actionTypes';

export default function categoryReducer(state = {}, action) {
  switch (action.type) {
    case types.categories.GET_ALL_CATEGORIES_SUCCESS: {
      return action.categories;
    }
    default: {
      return state;
    }
  }
}

