import * as types from '../actions/actionTypes';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case types.login.LOGIN_SUCCESS: {
      return action.user;
    }
    case types.login.LOGOUT_USER: {
      return {
        username: '',
        password: '',
      };
    }
    case types.login.GET_USER_SUCCESS: {
      return action.user;
    }
    case types.login.UPDATE_USER_SUCCESS: {
      return action.user;
    }
    default: {
      return state;
    }
  }
}

