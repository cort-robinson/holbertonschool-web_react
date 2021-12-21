import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes';

export default function noftificationReducer(state = { filter: 'DEFAULT', notifications: [] }, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          ...action.data.map((notification) => ({
            ...notification,
            isRead: false
          }))
        ]
      };

    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notification) => ({
          ...notification,
          isRead: notification.id === action.index
        }))
      };

    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter
      };

    default:
      return state;
  }
}
