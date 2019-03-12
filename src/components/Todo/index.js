import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import {
  Container, TodoDiv, TodoCheck, TodoText,
} from './styles';

const Todo = ({
  todo, toggleCheck, deleteTodo, editTodo, section,
}) => (
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

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    done: PropTypes.bool,
  }).isRequired,
  toggleCheck: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
};

export default Todo;
