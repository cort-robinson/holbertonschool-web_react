import { SELECT_COURSE } from '../actions/courseActionTypes';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import uiReducer from './uiReducer';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

describe('uiReducer', () => {
  it('returns initial state when no action is passed', () => {
    expect(uiReducer(initialState, {})).toEqual(initialState);
  });

  it('returns initial state when SELECT_COURSE action is passed', () => {
    expect(uiReducer(initialState, SELECT_COURSE)).toEqual(initialState);
  });

  it('returns state with changed isNotificationDrawerVisible prop when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    expect(uiReducer(initialState, DISPLAY_NOTIFICATION_DRAWER)).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
      });
  })
});
