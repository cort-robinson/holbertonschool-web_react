import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('Actions', () => {
  it('login returns proper action', () => {
    expect(login('email', 'password')).toEqual({
      type: LOGIN,
      user: { email: 'email', password: 'password' }
    });
  });

  it('logout returns proper action', () => {
    expect(logout()).toEqual({
      type: LOGOUT
    });
  });

  it('displayNotificationDrawer returns proper action', () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER
    });
  });

  it('hideNotificationDrawer returns proper action', () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER
    });
  });
});
