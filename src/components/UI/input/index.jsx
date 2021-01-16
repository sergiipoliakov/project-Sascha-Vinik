import PropTypes, { string } from 'prop-types';
import styles from './input.module.css';

function Input(props) {
  const { name, type, label, className, ...restProps } = props;
  const id = Date.now();
  const classList = [className, styles.inputWrapper].join(' ');
  console.log(classList);

  return (
    <div className={classList}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        name={name}
        {...restProps}
        className={styles.input}
      />
    </div>
  );
}
Input.dafaultProps = {
  type: 'text',
  name: null,
  label: '',
};
Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: '',
};

export default Input;
