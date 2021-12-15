import { css, StyleSheet } from 'aphrodite';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

const styles = StyleSheet.create({
  NotificationItem: {
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: '1px solid black',
      padding: '10px 8px',
    },
  },
  defaultNotification: {
    color: 'blue',
  },
  urgentNotification: {
    color: 'red',
  },
});

function NotificationItem({ type, html, value, markNotificationAsRead }) {
  return (
    <li className={type === 'default' ? css(styles.NotificationItem, styles.defaultNotification) : css(styles.NotificationItem, styles.urgentNotification)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markNotificationAsRead}>{value}</li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  onClick: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  onClick: () => { },
};

export default memo(NotificationItem);
