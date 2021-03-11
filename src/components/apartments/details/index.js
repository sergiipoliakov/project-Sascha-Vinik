import PropTypes from 'prop-types';
import Rating from '../../Rating';
import MainTitle from '../../UI/Typografy/title';
import styles from '../Apartment.module.css';
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

  return (
    <section className={className}>
      <div className={styles.heading}>
        <MainTitle>{title}</MainTitle>
        <Rating rating={rating} />
      </div>
      <img className={styles.photo} src={imgUrl} alt="" />
      <p>{descr}</p>
      <div className={styles.buttonContainer}>
        <Button onClick={handleOrderApartment}>Забронировать</Button>
      </div>
    </section>
  );
}

index.propTypes = {
  rating: PropTypes.number,
  descr: PropTypes.string,
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default index;
