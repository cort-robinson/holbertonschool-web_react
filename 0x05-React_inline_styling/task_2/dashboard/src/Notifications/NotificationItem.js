import { css, StyleSheet } from 'aphrodite';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

const styles = StyleSheet.create({
  defaultNotification: {
    color: 'blue',
  },
  urgentNotification: {
    color: 'red',
  },
});

function NotificationItem({ type, html, value, markAsRead }) {
  return (
    <li className={type === 'default' ? css(styles.defaultNotification) : css(styles.urgentNotification)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead}>{value}</li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => { },
};

export default memo(NotificationItem);
