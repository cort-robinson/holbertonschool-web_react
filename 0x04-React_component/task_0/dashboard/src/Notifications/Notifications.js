import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import icon from '../assets/close-icon.png';

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          {listNotifications.length > 0 ? (
            <>
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
                {listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html} />
                ))}
              </ul>
            </>
          ) : <p>No new notification for now</p>
          }
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
