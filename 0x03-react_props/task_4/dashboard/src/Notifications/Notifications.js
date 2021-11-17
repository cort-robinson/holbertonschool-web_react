import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

function Notifications({ displayDrawer }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <button aria-label="Close"
            style={{
              position: 'absolute',
              right: '0',
              top: '0',
              padding: '.25em',
              border: 'none',
              background: 'transparent',
            }}
            onClick={
              () => console.log('Close button has been clicked')
            }>
            <img src={icon} alt="" style={{ width: '1.5em' }} />
          </button>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
