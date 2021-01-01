import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import styles from './productList.module.css';

const ProductList = ({ items }) => {
  return (
    <div className={styles.list}>
      {items.length === 0
        ? 'нечего не найдено'
        : items.map(({ id, imgSrc, price, rating, description }) => (
            <ProductCard
              key={id}
              imgSrc={imgSrc}
              price={price}
              rating={rating}
              description={description}
            />
          ))}
    </div>
  );
};

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      imgSrc: PropTypes.string,
      price: PropTypes.number,
      rating: PropTypes.number,
      description: PropTypes.string,
    }),
  ),
};

export default ProductList;
