import { SELECT_COURSE } from '../actions/courseActionTypes';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import uiReducer from './uiReducer';
import { Map } from 'immutable';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

describe('uiReducer', () => {
  it('returns initial state when no action is passed', () => {
    expect(uiReducer(initialState, {}).toJS()).toEqual(initialState.toJS());
  });

  it('returns initial state when SELECT_COURSE action is passed', () => {
    expect(uiReducer(initialState, SELECT_COURSE).toJS()).toEqual(initialState.toJS());
  });

  it('returns state with changed isNotificationDrawerVisible prop when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const updatedState = initialState.set('isNotificationDrawerVisible', true);
    expect(uiReducer(initialState, DISPLAY_NOTIFICATION_DRAWER).toJS()).toEqual(updatedState.toJS());
  });
});
