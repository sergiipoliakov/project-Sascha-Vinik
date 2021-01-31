import styles from './Select.module.css';

import PropTypes from 'prop-types';

function Select(props) {
  return (
    <select>
      <options></options>
    </select>
  );
}

Select.propTypes = {
  items: PropTypes.oneOfType(
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({ value: PropTypes.string, text: PropTypes.string }),
    ),
  ),
};

export default Select;
