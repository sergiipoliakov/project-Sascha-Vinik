import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthCard from '../auth-card';
import Input from '../../UI/input';
import PrimaryButton from '../../UI/buttons/PrimaryButton.jsx';
import Title from '../../UI/Typografy/title/index.jsx';
import AuthSection from '../auth-section';
import paths from '../../../Router/routerPaths';
import styles from './Registration.module.css';
import { registerUser } from '../../../redux/userReduser';
import { connect } from 'react-redux';
import { isAsyncThunkAction } from '@reduxjs/toolkit';

class Registration extends Component {
  state = {
    formData: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  };

  handleSubmit = event => {
    event.preventDefault();
    const { formData } = this.state;
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert('not correctPassword');
      return;
    }
    console.log(this.state.formData);
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
          <Title className={styles.authTitle}>Registration</Title>
          <form onSubmit={this.handleSubmit}>
            <Input
              name="name"
              placeholder="name"
              onChange={this.handleInputChange}
              className={styles.authInput}
            />
            <Input
              name="email"
              type="email"
              placeholder="email"
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
            <Input
              name="confirmPassword"
              type="password"
              placeholder="confirmPassword"
              onChange={this.handleInputChange}
              className={styles.authInput}
            />
            <PrimaryButton type="submit" className={styles.authButton}>
              Вход
            </PrimaryButton>
            <Link to={paths.LOGIN}>Login</Link>
          </form>
        </AuthCard>
      </AuthSection>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  register: payload => dispatch(registerUser()),
});

export default connect(null, mapDispatchToProps)(Registration);
