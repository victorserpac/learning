import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { msg: this.props.location.query.msg };
  }

  envia(event) {
    event.preventDefault();

    const requestInfo = {
      method: 'POST',
      body: JSON.stringify({ username: this.login.value, password: this.senha.value }),
      headers: new Headers({
        'Content-type': 'application/json'
      })
    };

    fetch('http://localhost:3004/login', requestInfo)
      .then(response => {
        if (response.ok) {          
          return response.json();
        } else {
          throw new Error('não foi possível fazer o login');
        }
      })
      .then(res => {
        localStorage.setItem('auth-token', res.token);
        browserHistory.push('/timeline');
      })
      .catch(error => {
        this.setState({ msg: error.message });
      });
  }

  render() {
    return (
      <div className="login-box">
        <h1 className="header-logo">Instalura</h1>
        <span>{this.state.msg}</span>
        <form onSubmit={this.envia.bind(this)}>
          <input type="text" ref={(input) => this.login = input} />
          <input type="password" ref={(input) => this.senha = input} />
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
}