import React, { Component } from 'react';

import {
  Container, TodoDiv, TodoCheck, TodoText, TodoEdit, TodoDelete,
} from './styles';

class Todo extends Component {
  render() {
    const {
      todo, toggleCheck, deleteTodo, editTodo,
    } = this.props;
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
          <TodoEdit id={todo.id} onClick={e => editTodo(e)}>
            edit
          </TodoEdit>
          <TodoDelete onClick={e => deleteTodo(e)} name={todo.id}>
            delete
          </TodoDelete>
        </TodoDiv>
      </Container>
    );
  }
}

export default Todo;
