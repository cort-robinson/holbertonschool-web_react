import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from '../actions/notificationActionTypes';
import {
  fetchNotificationsSuccess,
  markAsRead,
  setNotificationFilter
} from '../actions/notificationActionCreators';
import notificationReducer from './notificationReducer';
import { notificationsNormalizer } from '../schema/notifications';
import { Map, fromJS } from 'immutable';

const notifications = [
  {
    id: 1,
    type: "default",
    value: "New course available"
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
    expect(notificationReducer(undefined, {})).toEqual(Map());
  });

  it('FETCH_NOTIFICATIONS_SUCCESS returns data passed', () => {
    expect(notificationReducer(undefined, fetchNotificationsSuccess(notifications)).toJS()).toEqual(
      {
        filter: 'DEFAULT',
        notifications: notificationsNormalizer(notifications.map(
          notification => ({ ...notification, isRead: false })
        ))
      }
    );
  });

  it('MARK_AS_READ returns data with the correct item updated', () => {
    const newState = notificationReducer(undefined, fetchNotificationsSuccess(notifications));
    expect(notificationReducer(newState, markAsRead(2)).toJS()).toEqual({
      filter: 'DEFAULT', notifications: notificationsNormalizer(notifications.map((notification) => ({
        ...notification,
        isRead: notification.id === 2
      })))
    });
  });

  it('SET_TYPE_FILTER returns data with updated state filter prop', () => {
    const newState = notificationReducer(undefined, fetchNotificationsSuccess(notifications));
    expect(notificationReducer(newState, setNotificationFilter('URGENT')).toJS()).toEqual({
      filter: 'URGENT', notifications: newState.toJS().notifications
    });
  });
});
