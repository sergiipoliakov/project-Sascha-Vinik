import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AuthCard from '../auth-card';
import Input from '../../UI/input';
import styles from './Login.module.css';
import PrimaryButton from '../../UI/buttons/PrimaryButton.jsx';
import Title from '../../UI/Typografy/title/index.jsx';
import AuthSection from '../auth-section';

export default class index extends Component {
  state = {
    formData: {
      login: '',
      password: '',
    },
  };

  handleSubmit = event => {
    event.preventDefault();
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
              name="login"
              type="login"
              placeholder="login"
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
