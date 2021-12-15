import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from './uiActionTypes';

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

const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());


export {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  boundDisplayNotificationDrawer,
  boundHideNotificationDrawer,
  boundLogin,
  boundLogout
};
