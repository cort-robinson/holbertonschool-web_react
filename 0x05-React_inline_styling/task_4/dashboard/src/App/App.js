import { css, StyleSheet } from 'aphrodite';
import PropTypes from 'prop-types';
import React from 'react';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';

const styles = StyleSheet.create({
  body: {
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    fontSize: '16px',
  },
  appBody: {
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
      maxWidth: '30ch',
    }
  },
  footer: {
    position: 'absolute',
    textAlign: 'center',
    left: '0',
    right: '0',
    bottom: '0',
    margin: '8px',
    borderTop: '#E0354B solid .25em',
    fontStyle: 'italic',
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => { },
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const htmlObject = {
      __html: getLatestNotification(),
    };

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: htmlObject },
    ];
    return (
      <>
        <div className={css(styles.body)}>
          <Notifications listNotifications={listNotifications} />
          <div className="App">
            <Header />
            <div className={css(styles.appBody)}>
              {this.props.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login />
                </BodySectionWithMarginBottom>
              )}
              <BodySection title="News from the School">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni animi repellat est ad quaerat unde praesentium necessitatibus repudiandae. Delectus eum laborum natus neque consequatur ad nihil maxime quam laudantium!</p>
              </BodySection>
            </div>
            <div className={css(styles.footer)}>
              <Footer />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
