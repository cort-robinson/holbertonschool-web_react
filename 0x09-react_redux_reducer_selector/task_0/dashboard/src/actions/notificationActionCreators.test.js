import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, NotificationTypeFilters, SET_TYPE_FILTER } from './notificationActionTypes';

describe('notificationActions', () => {
  it('markAsRead returns correct action', () => {
    expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, index: 1 });
  });

  it('setNotificationFilter returns correct action', () => {
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({ type: SET_TYPE_FILTER, filter: 'DEFAULT' });
  });
});
