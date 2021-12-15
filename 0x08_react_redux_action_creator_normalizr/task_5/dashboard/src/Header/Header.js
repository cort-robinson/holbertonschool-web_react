import { css, StyleSheet } from 'aphrodite';
import React from "react";
import { AppContext } from '../App/AppContext';
import logo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#E0354B',
    borderBottom: '#E0354B solid 0.25em',
  },
  logo: {
    height: '12em',
  },
  logOut: {
    fontStyle: 'italic',
    ':hover': {
      cursor: 'pointer',
    },
  }
});

class Header extends React.Component {
  render() {
    let value = this.context;
    return (
      <>
        <div className={css(styles.header)}>
          <img src={logo} className={css(styles.logo)} alt="logo" />
          <h1>School dashboard</h1>
        </div>
        {value.user.isLoggedIn && (
          <section id='logoutSection'>
            <p>Welcome <b>{value.user.email}</b> <a className={css(styles.logOut)} onClick={value.logOut}>(logout)</a></p>
          </section>
        )}
      </>
    );
  }
};
Header.contextType = AppContext;

export default Header;
