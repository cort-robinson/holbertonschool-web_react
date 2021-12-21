import notificationReducer from '../reducers/notificationReducer';
import { fetchNotificationsSuccess } from '../actions/notificationActionCreators';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from '../selectors/notificationSelector';
import { notificationsNormalizer } from '../schema/notifications';
import { markAsRead } from '../actions/notificationActionCreators';

const initialState = notificationReducer(undefined, fetchNotificationsSuccess());

const notifications = [
  {
    id: 1,
    isRead: false,
    type: 'default',
    value: 'New course available',
  },
  {
    id: 2,
    isRead: false,
    type: 'urgent',
    value: 'New resume available',
  },
  {
    id: 3,
    isRead: false,
    type: 'urgent',
    value: 'New data available',
  },
];

describe('notificationSelector', () => {
  it('filterTypeSelected returns filter value from state', () => {
    const state = initialState.set('filter', 'urgent');
    expect(filterTypeSelected(state)).toEqual('urgent');
  });

  it('getNotifications returns list of notification entities from state', () => {
    const state = initialState.set('notifications', notificationsNormalizer(notifications));
    expect(getNotifications(state).toJS()).toEqual(notificationsNormalizer(notifications).entities.notifications);
  });

  it('getUnreadNotifications returns list of unread notification entities from state', () => {
    const state = initialState.set('notifications', notificationsNormalizer(notifications));
    const unreadState = notificationReducer(state, markAsRead(2));
    expect(getUnreadNotifications(unreadState).toJS()).toEqual(notificationsNormalizer(notifications.filter((notification) => notification.id !== 2)).entities.notifications);
  })
});
