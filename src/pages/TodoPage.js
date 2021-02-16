import React, { Component } from 'react';

import Container from '../components/UI/Container';
import TodoForm from '../components/Todo/TodoForm';
import TodoList from '../components/Todo/TodoList';

const storedItems = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : [];

export default class TodoPage extends Component {
  state = {
    items: storedItems,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items !== this.state.items) {
      localStorage.setItem('todos', JSON.stringify(this.state.items));
    }
  }

  addTodo = todo => {
    this.setState(prevState => {
      return { items: [...prevState.items, todo] };
    });
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id),
    }));
  };

  completeTodo = id => {
    this.setState(prevState => ({
      items: prevState.items.map(item => {
        if (item.id === id) {
          return { ...item, status: 'completed' };
        }

        return item;
      }),
    }));
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <Container>
          <TodoForm onSubmit={this.addTodo} />
          <TodoList
            items={items}
            onDelete={this.deleteTodo}
            onComplete={this.completeTodo}
          />
        </Container>
      </div>
    );
  }
}
