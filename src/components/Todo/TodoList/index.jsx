import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label/index';

import styles from './TodoList.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const todoStyles = {
  todoItem: {
    position: 'relative',
    width: '100%',
    border: '1px solid #000',
    borderRadius: '4px',
    padding: '20px',
    marginBotton: '15px',
  },
  title: {
    marginTop: 0,
    color: 'purple',
  },
};

const Todo = ({ item, onDelete, onComplete }) => {
  const { title, description, id, status = 'created' } = item;
  return (
    <div style={todoStyles.todoItem}>
      <Label type={status} />
      <h2 style={todoStyles.title}>{title}</h2>
      <p>{description}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onComplete(id)}>Complete</button>
    </div>
  );
};

export default function TodoList({ items, onDelete, onComplete }) {
  return (
    <TransitionGroup>
      {items.map(todo => (
        <CSSTransition key={todo.id} timeout={400} classNames={styles}>
          <Todo
            key={todo.title}
            item={todo}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

TodoList.propTypes = {
  items: PropTypes.array,
};
