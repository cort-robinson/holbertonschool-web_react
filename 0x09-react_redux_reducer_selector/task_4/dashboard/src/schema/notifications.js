import { normalize, schema } from 'normalizr';
import notifications from '../../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const mySchema = [notification];
const normalizedNotifications = normalize(notifications, mySchema);

function getAllNotificationsByUser(userId) {
  const result = [];
  const notificationsObj = normalizedNotifications.entities.notifications;
  const messagesObj = normalizedNotifications.entities.messages;

  for (const notificationId in notificationsObj) {
    if (notificationsObj.hasOwnProperty(notificationId)) {
      const notification = notificationsObj[notificationId];
      if (notification.author === userId) {
        const contextId = notification.context;
        result.push(messagesObj[contextId]);
      }
    }
  }
  return result;
}

function notificationsNormalizer(data) {
  return normalize(data, mySchema);
}

export {
  normalizedNotifications,
  getAllNotificationsByUser,
  notificationsNormalizer,
};
