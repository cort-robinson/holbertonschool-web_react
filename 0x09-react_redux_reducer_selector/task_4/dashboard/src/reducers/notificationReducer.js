import { Map } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, NotificationTypeFilters, SET_TYPE_FILTER
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map();

export default function noftificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const newNotificationsList = action.data.map((notification) => ({
        ...notification,
        isRead: false
      }));
      const newState = {
        filter: NotificationTypeFilters.DEFAULT,
        notifications: notificationsNormalizer(newNotificationsList)
      };
      return state.merge(newState);

    case MARK_AS_READ:
      return state.setIn(
        ['notifications', 'entities', 'notifications', action.index.toString(), 'isRead'],
        true
      );

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
}
