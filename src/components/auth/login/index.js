import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import AuthCard from '../auth-card';
import Input from '../../UI/input';
import styles from './Login.module.css';
import PrimaryButton from '../../UI/buttons/PrimaryButton.jsx';
import Title from '../../UI/Typografy/title/index.jsx';
import AuthSection from '../auth-section';

import { paths } from '../../../Router/Router.jsx';
import { RouteTransition } from 'react-router-transition';
/*
Метод без редакс тулкита
import { getSessionOperation as loginUser } from '../../../redux/storeWithoutReduxToolkit/operations';
*/
import { loginUser } from '../../../redux/userReduser';
import { removeApartment } from 'redux/apartmentsReduser';

class Login extends Component {
  state = {
    formData: {
      login: '',
      password: '',
    },
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { getSessionOperation } = this.props;

    try {
      await getSessionOperation(this.state.formData);
      this.props.history.replace(paths.MAIN);
    } catch (error) {
      console.log(error);
    }
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
            <Link to={paths.REGISTRATION}>Registration</Link>
          </form>
        </AuthCard>
      </AuthSection>
    );
  }
}

const mapDispatchToProps = {
  getSessionOperation: payload => dispatch => dispatch(loginUser(payload)),
};

export default connect(null, mapDispatchToProps)(Login);
