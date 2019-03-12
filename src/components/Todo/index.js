import React, { Component, Fragment } from 'react';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import {
  Container, TodoDiv, TodoCheck, TodoText,
} from './styles';

class Todo extends Component {
  render() {
    const {
      todo, toggleCheck, deleteTodo, editTodo, section,
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
          {section === 'Undone' && (
            <Fragment>
              <IconButton id={todo.id} onClick={e => editTodo(e)} style={{ padding: 6 }}>
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={e => deleteTodo(e)} name={todo.id} style={{ padding: 6 }}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Fragment>
          )}
        </TodoDiv>
      </Container>
    );
  }
}

export default Todo;
