import { css, StyleSheet } from "aphrodite";
import React from "react";

const styles = StyleSheet.create({
  login: {
    padding: '2.5em',
  },
  loginLabelInput: {
    marginRight: '0.75em'
  }
});

function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <label className={css(styles.loginLabelInput)} htmlFor="email">Email:</label>
      <input className={css(styles.loginLabelInput)} type="email" name="email" id="email" />
      <label className={css(styles.loginLabelInput)} htmlFor="pwd">Password:</label>
      <input className={css(styles.loginLabelInput)} type="password" name="pwd" id="pwd" />
      <button>OK</button>
    </div>
  );
}

export default Login;
