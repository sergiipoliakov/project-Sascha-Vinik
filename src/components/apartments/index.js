import React from 'react';
import PropTypes from 'prop-types';
import ApartmentDetails from './details';
import Reviews from './Reviews';
import Container from '../UI/Container';
import styles from './Apartment.module.css';

function ApartmentPage({ apartment }) {
  if (!apartment) return null;
  const { rating, title, descr, imgUrl, id } = apartment;
  return (
    <div>
      <Container>
        <div className={styles.content}>
          <ApartmentDetails
            className={styles.details}
            rating={rating}
            title={title}
            descr={descr}
            imgUrl={imgUrl}
            id={id}
          />
          <Reviews />
        </div>
      </Container>
    </div>
  );
}

ApartmentPage.propTypes = {
  apartment: PropTypes.object,
};

export default ApartmentPage;
