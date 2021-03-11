import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReviewHeader.module.css';
import Rating from '../../../Rating';

const ReviewHeader = ({ totalRating, amount }) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Сумарный рейтинг</h2>
      <div className={styles.rating}>
        <span>{amount} Отзывов</span>
        <Rating rating={totalRating} />
      </div>
    </div>
  );
};

ReviewHeader.propTypes = {
  totalRating: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

export default ReviewHeader;
