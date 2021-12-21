import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS
} from './notificationActionTypes';

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

const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index
  };
};

const boundMarkAsRead = (index) => dispatch(markAsRead(index));

const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter
  };
};

const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

const fetchNotificationsSuccess = () => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: notifications
  };
};

export {
  markAsRead,
  setNotificationFilter,
  boundMarkAsRead,
  boundSetNotificationFilter,
  fetchNotificationsSuccess
};
