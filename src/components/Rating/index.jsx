import React from 'react';
import PropTypes from 'prop-types';
import styles from './rating.module.css';

const Rating = ({ rating, limit }) => {
  const coloredRatingWidth = (rating / limit) * 100 + '%';
  let emptyStarslist = [];
  let coloredStarsList = [];
  for (let i = 0; i < limit; i += 1) {
    emptyStarslist.push(
      <img
        key={i}
        className={styles.star}
        src="./stars/star-outlined.svg"
        alt=""
      />,
    );
    coloredStarsList.push(
      <img
        key={i}
        className={styles.star}
        src="./stars/star-yellow.svg"
        alt=""
      />,
    );
  }

  const EmptyStars = () => emptyStarslist;
  const ColoredStars = () => coloredStarsList;

  return (
    <div className={styles.rating}>
      <div className={styles.emptyStars}>
        <EmptyStars />
        <div
          className={styles.coloredStars}
          style={{ width: coloredRatingWidth }}
        >
          <ColoredStars />
        </div>
      </div>
    </div>
  );
};

Rating.defaultProps = {
  limit: 8,
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  limit: PropTypes.number,
};

export default Rating;
