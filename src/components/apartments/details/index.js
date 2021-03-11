import React from 'react';
import PropTypes from 'prop-types';
import styles from '.';
import Container from '../../UI/Container';
import MainTitle from '../../UI/Typografy/title';
import Rating from '../../Rating';
import Button from '../../UI/buttons/PrimaryButton';
import { requestApartmentsOrder } from 'services/order.servise';

function index({ rating, title, descr, imgUrl, className = '', id }) {
  const handleOrderApartment = async () => {
    try {
      await requestApartmentsOrder(id);
    } catch (error) {
      console.log(error);
    }
  };

  const classlist = [styles.heading];
  return (
    <section>
      <Container>
        <div>
          <MainTitle>{title}</MainTitle>
          <Rating rating={rating} />
        </div>
        <img src={imgUrl} alt="wqeqw" />
        <p>{descr}</p>
        <div className={styles.buttonContainer}>
          <Button onClick={handleOrderApartment(id)}>Забронировать</Button>
        </div>
      </Container>
    </section>
  );
}

index.propTypes = {};

export default index;
