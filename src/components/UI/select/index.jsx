import styles from './Select.module.css';
import PropTypes from 'prop-types';

function Select({ items, className = '', color, ...restProps }) {
  const classStyles = [styles.select, className].join(' ');
  return (
    <select className={classStyles} {...restProps}>
      {items.map(item => {
        let text, value;
        if (typeof item === 'string') {
          text = item;
          value = item;
        } else {
          text = item.text;
          value = item.value;
        }

        return <option value={value}>{text}</option>;
      })}
      <option></option>
    </select>
  );
}

Select.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        value: PropTypes.string,
        text: PropTypes.string,
      }),
    ]),
  ),
  color: PropTypes.string,
};

export default Select;
