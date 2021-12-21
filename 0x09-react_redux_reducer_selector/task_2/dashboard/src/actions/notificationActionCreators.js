import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index
  };
}

const boundMarkAsRead = (index) => dispatch(markAsRead(index));

const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter
  };
}

const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

export { markAsRead, setNotificationFilter, boundMarkAsRead, boundSetNotificationFilter };
