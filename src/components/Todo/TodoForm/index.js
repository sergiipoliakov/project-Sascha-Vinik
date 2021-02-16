import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoForm.module.css';
import { v4 as uuidv } from 'uuid';

export default class TodoForm extends Component {
  state = {
    title: '',
    description: '',
  };

  handleChange = event => {
    const { value, name } = event.target;
    console.log(value, name);
    this.setState(() => ({
      [name]: value,
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state, id: uuidv() });
  };
  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          name="title"
          onChange={this.handleChange}
          placeholder="title"
        />
        <input
          className={styles.input}
          name="description"
          onChange={this.handleChange}
          placeholder="description"
        />
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
