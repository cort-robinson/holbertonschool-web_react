import { css, StyleSheet } from "aphrodite";
import React from "react";

const styles = StyleSheet.create({
  login: {
    '@media (min-width: 900px)': {
      padding: '2.5em',
    },
  },
  loginLabelInput: {
    marginRight: '0.7em'
  },
  input: {
    '@media (max-width: 900px)': {
      display: 'block',
    }
  }
});

function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <span className={css(styles.input)}>
        <label className={css(styles.loginLabelInput)} htmlFor="email">Email:</label>
        <input className={css(styles.loginLabelInput)} type="email" name="email" id="email" />
      </span>
      <span className={css(styles.input)}>
        <label className={css(styles.loginLabelInput)} htmlFor="pwd">Password:</label>
        <input className={css(styles.loginLabelInput)} type="password" name="pwd" id="pwd" />
      </span>
      <button>OK</button>
    </div>
  );
}

export default Login;
