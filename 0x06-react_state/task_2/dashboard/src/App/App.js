import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import { AppContext, user as defaultUser } from './AppContext';

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
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: () => { this.setState({ user: defaultUser }); },
    };
  }

  logIn(email, password) {
    this.setState({ user: { email, password, isLoggedIn: true } });
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

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
      <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
        <div className={css(styles.body)}>
          <Notifications listNotifications={listNotifications} displayDrawer={this.state.displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer} />
          <div className="App">
            <Header />
            <div className={css(styles.appBody)}>
              {this.state.user.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login logIn={this.logIn} />
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
      </AppContext.Provider>
    );
  }
}

export default App;
