import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import icon from '../assets/close-icon.png';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  };

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  render() {
    return (
      <>
        <div className="menuItem">Your notifications</div>
        {this.props.displayDrawer && (
          <div className="Notifications">
            {this.props.listNotifications.length > 0 ? (
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
                  {this.props.listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => {this.markAsRead(notification.id)}} />
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
}

export default Notifications;
