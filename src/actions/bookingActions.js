import * as types from './actionTypes';
import BookingApi from '../api/mockBookingApi';

export function bookItemSuccess(item) {
  return { type: types.booking.BOOK_ITEM_SUCCESS, item };
}

export function updateUserSucess(person) {
  return { type: types.login.UPDATE_USER_SUCCESS, user: person };
}

export function bookItem(gearId, personsId, startDate, endDate) {
  return function (dispatch) {
    return BookingApi.bookItem(gearId, personsId, startDate, endDate).then((resp) => {
      dispatch(bookItemSuccess(resp.item));
      dispatch(updateUserSucess(resp.user));
    }).catch((error) => {
      throw (error);
    });
  };
}
