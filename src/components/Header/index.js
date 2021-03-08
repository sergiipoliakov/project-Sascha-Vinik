import React from 'react';
import { connect } from 'react-redux';
import Container from '../UI/Container';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import paths from '../../Router/routerPaths';
import WithLoggedInStatus from '../../hocs/WithLoggedInStatus';
import { logout } from '../../redux/userReduser';

const Logo = () => (
  <Link className={styles.link} to={paths.MAIN}>
    Logo
  </Link>
);

const ProfileLink = ({ logout }) => {
  return (
    <div>
      <Link className={styles.link} to={paths.TODO}>
        Profile
      </Link>
      <button onClick={logout} type="button">
        logout
      </button>
    </div>
  );
};

const profileMapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const ProfileLinkWithLogout = connect(
  null,
  profileMapDispatchToProps,
)(ProfileLink);

const AuthLinks = () => {
  return (
    <div>
      <Link className={styles.link} to={paths.LOGIN}>
        login
      </Link>
      /
      <Link className={styles.link} to={paths.REGISTRATION}>
        Registration
      </Link>
    </div>
  );
};

function Header({ isLoggedIn }) {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Logo />
          {isLoggedIn ? <ProfileLinkWithLogout /> : <AuthLinks />}
        </div>
      </Container>
    </header>
  );
}

export default WithLoggedInStatus(Header);
