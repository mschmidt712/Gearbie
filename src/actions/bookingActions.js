import * as types from './actionTypes';
import BookingApi from '../api/mockBookingApi';

export function bookItemSuccess(item, person) {
  return { type: types.items.BOOK_ITEM_SUCCESS, item, person };
}

export function bookItem(gearId, personsId, startDate, endDate) {
  return function (dispatch) {
    return BookingApi.bookItem(gearId, personsId, startDate, endDate).then(resp => (
      dispatch(bookItemSuccess(resp))
    )).catch((error) => {
      throw (error);
    });
  };
}
