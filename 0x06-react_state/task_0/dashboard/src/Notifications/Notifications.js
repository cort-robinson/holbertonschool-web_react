import { css, StyleSheet } from 'aphrodite';
import PropTypes from 'prop-types';
import React from 'react';
import icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const translateKeyframes = {
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const opacityKeyframes = {
  'from': {
    opacity: '0.5',
  },
  'to': {
    opacity: '1',
  },
};

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
    backgroundColor: '#fff8f8',
    ':hover': {
      cursor: 'pointer',
      animationName: [translateKeyframes, opacityKeyframes],
      animationDuration: '500ms, 1s',
      animationIterationCount: '3',
    }
  },
  menuItemOpen: {
    display: 'none',
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
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => { },
    handleHideDrawer: () => { },
  };

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.listNotifications.length > this.props.listNotifications.length || nextProps.displayDrawer !== this.props.displayDrawer)
      return true;
    return false;
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <>
        <div className={this.props.displayDrawer === false ? `menuItem ${css(styles.menuItem)}` : `menuItem ${css(styles.menuItem, styles.menuItemOpen)}`} onClick={handleDisplayDrawer}>Your notifications</div>
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
                  onClick={handleHideDrawer}
                >
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
