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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, () => {
      if (this.state.email !== '' && this.state.password !== '')
        this.setState({ enableSubmit: true });
    });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, () => {
      if (this.state.email !== '' && this.state.password !== '')
        this.setState({ enableSubmit: true });
    });
  }

  render() {
    return (
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <span className={css(styles.input)}>
            <label className={css(styles.loginLabelInput)} htmlFor="email">Email:</label>
            <input className={css(styles.loginLabelInput)} type="email" name="email" value={this.state.email} onChange={this.handleChangeEmail} id="email" />
          </span>
          <span className={css(styles.input)}>
            <label className={css(styles.loginLabelInput)} htmlFor="pwd">Password:</label>
            <input className={css(styles.loginLabelInput)} type="password" name="pwd" value={this.state.password} onChange={this.handleChangePassword} id="pwd" />
          </span>
          <input type="submit" disabled={!this.state.enableSubmit} />
        </form>
      </div>
    );
  }
}

export default Login;
