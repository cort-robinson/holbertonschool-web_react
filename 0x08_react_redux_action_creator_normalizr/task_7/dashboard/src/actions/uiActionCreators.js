import 'node-fetch';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT
} from './uiActionTypes';

const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password }
  };
};

const boundLogin = (email, password) => dispatch(login(email, password));

const logout = () => {
  return {
    type: LOGOUT
  };
};

const boundLogout = () => dispatch(logout());

const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  };
};

const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());

const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  };
};

const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer())

const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('http://localhost:8080/login-success.json')
      .then((res) => res.json())
      .then(() => dispatch(loginSuccess()))
      .catch(() => dispatch(loginFailure()));
  };
}

export {
  login,
  boundLogin,
  logout,
  boundLogout,
  displayNotificationDrawer,
  boundDisplayNotificationDrawer,
  hideNotificationDrawer,
  boundHideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest
};
