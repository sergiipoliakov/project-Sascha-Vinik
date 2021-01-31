import PropTypes from 'prop-types';
import Input from '../../UI/input';
import Button from '../../UI/buttons/PrimaryButton';
import Select from '../../UI/select';
import styles from './ApartmentsFilter.module.css';

const citis = [
  {
    value: 'Kyiv',
    text: 'Kyiv',
  },
  'eqeqwe',
  'erwrwer',
];

const index = ({ handleChange }) => {
  return (
    <div className={styles.apartmentsFilter}>
      <Select items={citis} />
      <Input placeholder="Цена от" onChange={handleChange} />
      <Button>Подбор жилья</Button>
    </div>
  );
};

index.propTypes = {
  handleChange: PropTypes.func,
};

export default index;
