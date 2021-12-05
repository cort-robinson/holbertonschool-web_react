import React from 'react';
import { AppContext } from '../App/AppContext';

function Footer() {
  return (
    <AppContext.Consumer>
      {(value) => (
        <div className="App-footer">
          <p>Copyright 2020 - holberton School</p>
          {value.user.isLoggedIn && (
          <p><a>Contact Us</a></p>
          )}
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;
