import React, { Component } from 'react';

import {
  Container, TodoDiv, TodoCheck, TodoText, TodoEdit, TodoDelete,
} from './styles';

class Todo extends Component {
  render() {
    const { todo } = this.props;
    return (
      <Container>
        <TodoDiv>
          <TodoCheck type="checkbox" />
          <TodoText>{todo.description}</TodoText>
          <TodoEdit>edit</TodoEdit>
          <TodoDelete>delete</TodoDelete>
        </TodoDiv>
      </Container>
    );
  }
}

export default Todo;
