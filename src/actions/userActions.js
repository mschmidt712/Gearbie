import * as types from './actionTypes';
import UserApi from '../api/mockUserApi';

export function loginSuccess(user) {
  return { type: types.login.LOGIN_SUCCESS, user };
}

export function loginUser(user) {
  return function login(dispatch) {
    return UserApi.loginUser(user).then(resp => (
      dispatch(loginSuccess(resp))
    )).catch((error) => {
      throw (error);
    });
  };
}

export function logoutUser(user) {
  return { type: types.login.LOGOUT_USER, user };
}
