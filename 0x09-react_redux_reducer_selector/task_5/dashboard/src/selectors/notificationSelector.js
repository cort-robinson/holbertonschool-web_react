import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const filterTypeSelected = (state) => state.get('filter');

const getNotifications = (state) => Map(state.getIn(['notifications', 'entities', 'notifications']));

const getUnreadNotifications = (state) => getNotifications(state).filter((notification) => notification.isRead === false);

export {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
};
