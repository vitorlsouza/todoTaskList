import React, { Component } from 'react';

import { Container, Title, Todos } from './styles';

import Todo from '../Todo';

class TodoList extends Component {
  render() {
    const { section, todos, toggleCheck } = this.props;
    const actualSection = section !== 'Undone';
    return (
      <Container>
        <Title>{section}</Title>
        <Todos>
          {todos
            .filter(t => t.done === actualSection)
            .map(todo => (
              <Todo key={todo.id} todo={todo} toggleCheck={toggleCheck} />
            ))}
        </Todos>
      </Container>
    );
  }
}

export default TodoList;
