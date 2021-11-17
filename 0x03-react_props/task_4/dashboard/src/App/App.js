import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <div class="App">
        <Header />
        <div class="App-body">
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <div class="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
