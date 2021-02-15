import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

export default function Title({
  className,
  children,
  level = 1,
  ...restProps
}) {
  const TagName = `h${level}`;
  const classList = [className, styles.title].join(' ');
  return (
    <TagName className={classList} {...restProps}>
      {children}
    </TagName>
  );
}

Title.propTypes = {
  className: PropTypes.string,
  level: PropTypes.number,
};
