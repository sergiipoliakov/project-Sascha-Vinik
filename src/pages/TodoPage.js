import React, { Component } from 'react';

import Container from '../components/UI/Container';
import Label from '../components/Todo/Label';
import TodoForm from '../components/Todo/TodoForm';

const styles = {
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

const Todo = ({ item }) => {
  const { title, description, status = 'created' } = item;
  return (
    <div style={styles.todoItem}>
      <Label type={status} />
      <h2 style={styles.title}>{title}</h2>
      <p>{description}</p>
      <div>{status}</div>
    </div>
  );
};

const TodoList = ({ items }) =>
  items.map(todo => <Todo key={todo.title} item={todo} />);

const mock = [
  {
    title: 'Hallo',
    description: 'To do something',
    status: 'created',
  },
  {
    title: 'Buy mackbook',
    description: 'As quick as possible',
    status: 'completed',
  },
];

export default class TodoPage extends Component {
  state = {
    items: [...mock],
  };

  addTodo = todo => {
    this.setState(prevState => ({
      items: [...prevState.items, todo],
    }));
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <Container>
          <TodoForm onSubmit={this.addTodo} />
          <TodoList items={items} />
        </Container>
      </div>
    );
  }
}
