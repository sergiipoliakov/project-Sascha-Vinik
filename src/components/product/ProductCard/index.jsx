import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../../Rating';
import Price from './ProductPrice';
import styles from './productCard.module.css';

const ProductCard = ({ imgSrc, price, rating, description }) => {
  const hasHightRating = rating >= 4;

  return (
    <section className={styles.card}>
      <div className={styles.cardInner}>
        <img className={styles.photo} src={imgSrc} alt="weqr" />
        <div className={styles.content}>
          {hasHightRating && 'Топ продаж'}
          <p>{description}</p>
          <Rating rating={rating} />
          <Price value={price} />
        </div>
      </div>
    </section>
  );
};

ProductCard.defaultProps = {
  imgSrc:
    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem est pariatur accusamus     omnis reiciendis adipisci voluptas dignissimos at. Magni illum amet libero assumenda aliquid cum illo dolore veritatis architecto.`,
};

ProductCard.propTypes = {
  imgSrc: PropTypes.string,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string,
};

export default ProductCard;
