import * as types from '../actions/actionTypes';

export default function categoryReducer(state = {}, action) {
  switch (action.type) {
    case types.items.GET_ITEMS_BY_CATEGORY_SUCCESS: {
      return action.itemsByCategory;
    }
    case types.items.GET_ITEM_BY_ID_SUCCESS: {
      return action.itemById;
    }
    case types.items.GET_NEARBY_ITEMS_SUCCESS: {
      return action.nearbyItems;
    }
    default: {
      return state;
    }
  }
}

