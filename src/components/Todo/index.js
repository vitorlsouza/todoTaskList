import React, { Component } from 'react';

import {
  Container, TodoDiv, TodoCheck, TodoText, TodoEdit, TodoDelete,
} from './styles';

class Todo extends Component {
  render() {
    const { todo, toggleCheck } = this.props;
    return (
      <Container>
        <TodoDiv>
          <TodoCheck
            type="checkbox"
            onChange={e => toggleCheck(e)}
            name={todo.id}
            checked={todo.done}
          />
          <TodoText done={todo.done}>{todo.description}</TodoText>
          <TodoEdit>edit</TodoEdit>
          <TodoDelete>delete</TodoDelete>
        </TodoDiv>
      </Container>
    );
  }
}

export default Todo;
