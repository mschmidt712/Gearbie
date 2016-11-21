import * as types from '../actions/actionTypes';

export default function bookingReducer(state = {}, action) {
  switch (action.type) {
    case types.booking.BOOK_ITEM_SUCCESS: {
      return action.item;
    }
    case types.booking.UPDATE_USER_SUCCESS: {
      return action.user;
    }
    default: {
      return state;
    }
  }
}
