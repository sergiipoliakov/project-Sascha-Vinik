import PropTypes from 'prop-types';
import styles from './AuthSection.module.css';

function AuthSection({ children }) {
  return <section className={styles.section}>{children}</section>;
}

AuthSection.propTypes = {};

export default AuthSection;
