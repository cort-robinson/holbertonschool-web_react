import { css, StyleSheet } from 'aphrodite';
import React from "react";
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
  }
});

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
};;

export default Header;
