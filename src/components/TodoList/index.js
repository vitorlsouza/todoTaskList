import React, { Component } from 'react';

import { Container, Title, Todos } from './styles';

import Todo from '../Todo';

class TodoList extends Component {
  render() {
    const { section, todos } = this.props;
    const actualSection = section !== 'Undone';
    return (
      <Container>
        <Title>{section}</Title>
        <Todos>
          {todos
            .filter(t => t.done === actualSection)
            .map(todo => (
              <Todo todo={todo} />
            ))}
        </Todos>
      </Container>
    );
  }
}

export default TodoList;
