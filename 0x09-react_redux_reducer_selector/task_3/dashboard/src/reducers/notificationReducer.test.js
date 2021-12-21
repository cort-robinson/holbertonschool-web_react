import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from '../actions/notificationActionTypes';
import notificationReducer from './notificationReducer';

const notifications = [
  {
    id: 1,
    type: "default",
    value: "New notification available"
  },
  {
    id: 2,
    type: "urgent",
    value: "New resume available"
  },
  {
    id: 3,
    type: "urgent",
    value: "New data available"
  }
];

describe('notificationReducer', () => {
  it('empty state returns empty notification array', () => {
    expect(notificationReducer(undefined, {})).toEqual({ filter: 'DEFAULT', notifications: [] });
  });

  it('FETCH_NOTIFICATIONS_SUCCESS returns data passed', () => {
    expect(notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications }))
      .toEqual({
        filter: 'DEFAULT', notifications: notifications.map(
          (notification) => ({ ...notification, isRead: false }))
      });
  });

  it('MARK_AS_READ returns data with the correct item updated', () => {
    const newState = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications });
    expect(notificationReducer(newState, { type: MARK_AS_READ, index: 2 })).toEqual({
      filter: 'DEFAULT', notifications: notifications.map((notification) => ({
        ...notification,
        isRead: notification.id === 2
      }))
    });
  });

  it('SET_TYPE_FILTER returns data with updated state filter prop', () => {
    const newState = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications });
    expect(notificationReducer(newState, { type: SET_TYPE_FILTER, filter: 'URGENT' })).toEqual({
      filter: 'URGENT', notifications: newState.notifications
    });
  });
});
