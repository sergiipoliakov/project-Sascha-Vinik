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
import { UserConsumer } from '../../../context/UserContext';
import { withUserData } from '../../../context/UserContext';
import userEvent from '@testing-library/user-event';

const Info = ({ user }) => (
  <div>
    Name:{user.name}, age:{user.age}
  </div>
);
const InfoWithUserData = withUserData(Info);

export default class Login extends Component {
  state = {
    formData: {
      login: '',
      password: '',
    },
  };

  handleSubmit = async event => {
    event.preventDefault();

    this.props.history.replace(paths.MAIN);
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
          <InfoWithUserData />
          <UserConsumer>
            {({ name }) => (
              <Title className={styles.authTitle}>Login: {name}</Title>
            )}
          </UserConsumer>

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
