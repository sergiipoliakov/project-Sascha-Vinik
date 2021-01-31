import styles from './Select.module.css';

import PropTypes from 'prop-types';

function Select({ items, coclor }) {
  return (
    <select>
      {items.map(item => {
        if (typeof item === 'string') {
          return <option value={item}>{item}</option>;
        }
        const { value, text } = item;

        return <option value={value}>{text}</option>;
      })}
      <option></option>
    </select>
  );
}

Select.propTypes = {
  items: PropTypes.oneOfType(
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
  ),
  color: PropTypes.string,
};

export default Select;
