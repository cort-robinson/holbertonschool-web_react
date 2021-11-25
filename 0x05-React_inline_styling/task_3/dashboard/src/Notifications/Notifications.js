import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import icon from '../assets/close-icon.png';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
    backgroundColor: 'white',
    fontSize: '20px',
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    padding: '0',
    zIndex: '1',
    '@media (min-width: 900px)': {
      fontSize: '1rem',
      right: '0.5em',
      width: '20em',
      height: 'auto',
      padding: '0 0.5em',
      border: '0.1em dashed #E0354B',
    },
  },
  menuItem: {
    display: 'block',
    textAlign: 'right',
    marginBottom: '0.5em',
  },
  menuItemOpenMobile: {
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
  list: {
    '@media (max-width: 900px)': {
      listStyle: 'none',
      padding: '0',
    },
  },
});

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
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.listNotifications.length > this.props.listNotifications.length)
      return true;
    return false;
  }

  render() {
    return (
      <>
        <div className={this.props.displayDrawer === false ? css(styles.menuItem) : css(styles.menuItem, styles.menuItemOpenMobile)}>Your notifications</div>
        {this.props.displayDrawer && (
          <div className={`Notifications ${css(styles.notifications)}`}>
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
                <ul className={css(styles.list)}>
                  {this.props.listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => { this.markAsRead(notification.id); }} />
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
