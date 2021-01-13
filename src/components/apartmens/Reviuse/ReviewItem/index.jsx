import React from 'react';
import propTypes from 'prop-types';
import Rating from '../../../Rating';
import styles from './ReviewseItem.module.css';

export default function ReviewseItem({ rating, title, description }) {
  return (
    <div className={styles.reviewseItem}>
      <div className={styles.header}>
        <img src="" alt="" className={styles.avatar}></img>
      </div>
      <h2>{title}</h2>
      <Rating rating={rating} />
      <p className={styles.descriptiont}>{description}</p>
    </div>
  );
}

// ReviewseItem.proptyps = {
//     rating:

// }
