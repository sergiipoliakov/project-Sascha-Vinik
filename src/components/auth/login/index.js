import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AuthCard from '../auth-card';
import Input from '../../UI/input';
import styles from './Login.module.css';
import PrimaryButton from '../../UI/buttons/PrimaryButton.jsx';
import Title from '../../UI/Typografy/title/index.jsx';
import AuthSection from '../auth-section';
import { loginUser } from '../../../services/auth.services';
import { paths } from '../../../Router/Router.jsx';

export default class Login extends Component {
  state = {
    formData: {
      login: '',
      password: '',
    },
  };

  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.props.history);
    this.props.history.replace(paths.MAIN);

    // try {
    //   await loginUser(this.state.formData);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => {
      return { formData: { ...prevState.formData, [name]: value } };
    });
  };
  render() {
    return (
      <AuthSection>
        <AuthCard>
          <Title className={styles.authTitle}>Login</Title>
          <form onSubmit={this.handleSubmit}>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              onChange={this.handleInputChange}
              className={styles.authInput}
            />
            <Input
              name="password"
              type="password"
              placeholder="password"
              onChange={this.handleInputChange}
              className={styles.authInput}
            />
            <PrimaryButton type="submit" className={styles.authButton}>
              Вход
            </PrimaryButton>
          </form>
        </AuthCard>
      </AuthSection>
    );
  }
}
