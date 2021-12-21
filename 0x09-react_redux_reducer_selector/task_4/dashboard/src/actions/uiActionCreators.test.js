import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  displayNotificationDrawer,
  hideNotificationDrawer, login, loginFailure,
  loginRequest, loginSuccess, logout
} from './uiActionCreators';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER, LOGIN,
  LOGOUT
} from './uiActionTypes';



const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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

describe('loginRequest()', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('API returns correct response, store receives LOGIN and LOGIN_SUCCESS actions', () => {
    const store = mockStore({});
    fetchMock.restore();

    const user = { email: 'email@gmail.com', password: 'password' };

    fetchMock.get('http://localhost:8080/login-success.json', '{}');

    return store.dispatch(loginRequest(user.email, user.password))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(login(user.email, user.password));
        expect(actions[1]).toEqual(loginSuccess());
      });
  });

  it('store receives LOGIN and LOGIN_FAILURE actions', () => {
    const store = mockStore({});

    fetchMock.mock('http://localhost:8080/login-success.json', 500);

    const user = { email: 'email@gmail.com', password: 'password' };

    return store
      .dispatch(loginRequest(user.email, user.password))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(login(user.email, user.password));
        expect(actions[1]).toEqual(loginFailure());
      });
  });
});
