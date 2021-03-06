import React, { Component } from 'react';
import styled from 'styled-components';

import Container from '../atoms/Container';
import Form from '../atoms/Form';
import Input from '../atoms/Input';
import Title from '../atoms/Title';

import styles from '../css/Login.module.scss';

import api from '../api';

const Background = styled(Container)`
  background-color: ${props => props.theme.almostblack};
`

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  // redirect if we're already logged in
  componentWillMount() {
    if (api.loggedIn())
      this.props.history.replace('/');
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePass(event) {
    this.setState({ password: event.target.value });
  }

  handleLogin(event) {
    const { email, password } = this.state;

    api.login(
      email,
      password
    ).then(resp => {
      this.props.history.replace('/')
    }).catch(alert)

    event.preventDefault();
  }

  render() {
    return (
      <Background width='100%' height='100%' justifyContent='center' alignItems='center'>
        <Form width='400px' height='auto' alignItems='center' onSubmit={this.handleLogin}>
          <Title>Login</Title>
          <Input margin='5px'
            type='text' value={this.state.email} placeholder='email'
            onChange={this.handleEmail}
          />

          <Input margin='5px'
            type='password' value={this.state.password} placeholder='password'
            onChange={this.handlePass}
          />
          <button className={styles.button}>Login</button>
        </Form>
      </Background>
    )
  }
}

export default Login;