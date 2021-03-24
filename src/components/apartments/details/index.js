import PropTypes from 'prop-types';
import Rating from '../../Rating';
import MainTitle from '../../UI/Typografy/title';
import styles from '../Apartment.module.css';
import Container from '../../UI/Container';
import Button from '../../UI/buttons/PrimaryButton';
import { requestApartmentsOrder } from 'services/order.servise';

function index({ rating, title, descr = '', imgUrl, className = '', id }) {
  const handleOrderApartment = async () => {
    try {
      await requestApartmentsOrder(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.details}>
      <div className={styles.heading}>
        <MainTitle>{title}</MainTitle>
        <Rating rating={rating} />
      </div>
      <img className={styles.photo} src={imgUrl} alt="wqeqw" />
      <p>{descr}</p>
      <div className={styles.buttonContainer}>
        <Button onClick={handleOrderApartment(id)}>Забронировать</Button>
      </div>
    </section>
  );
}

index.propTypes = {
  rating: PropTypes.number,
  title: PropTypes.string.isRequired,
  descr: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
};

export default index;
