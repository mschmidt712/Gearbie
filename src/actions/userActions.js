import * as types from './actionTypes';
import UserApi from '../api/mockUserApi';

export function loginSuccess(user) {
  return { type: types.login.LOGIN_SUCCESS, user };
}

export function loginUser(user) {
  return function loginUserThunk(dispatch) {
    return UserApi.loginUser(user).then(resp => (
      dispatch(loginSuccess(resp))
    )).catch((error) => {
      throw (error);
    });
  };
}

export function getUserSuccess(user) {
  return { type: types.login.GET_USER_SUCCESS, user };
}

export function getUser() {
  return function getUserThunk(dispatch) {
    return UserApi.checkUser().then(resp => (
      dispatch(getUserSuccess(resp))
    )).catch((error) => {
      throw (error);
    });
  };
}

export function logoutUser(user) {
  return { type: types.login.LOGOUT_USER, user };
}

export function updateUserSuccess(user) {
  return { type: types.login.UPDATE_USER_SUCCESS, user };
}

export function updateUser(user) {
  return function updateUserThunk(dispatch) {
    return UserApi.updateUser(user).then(resp => (
      dispatch(updateUserSuccess(resp))
    ));
  };
}
