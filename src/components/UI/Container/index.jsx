import React from 'react';
import PropTypes from 'prop-types';
import styles from './container.module.css';

const Container = ({ className, as: TagName, children }) => {
  const classList = [styles.container, className].join(' ');
  return <TagName className={classList}>{children}</TagName>;
};

Container.defaultProps = {
  as: 'div',
  className: '',
};

Container.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
};

export default Container;
