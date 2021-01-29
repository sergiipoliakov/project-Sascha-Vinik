import PropTypes, { string } from 'prop-types';
import styles from './input.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class Input extends Component {
  state = {
    id: nanoid(),
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
  }

  render() {
    const { name, type, label, className, ...restProps } = this.props;

    const classList = [className, styles.inputWrapper].join(' ');
    const { id } = this.state;

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
