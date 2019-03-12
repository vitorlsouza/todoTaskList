import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Title, Todos, ButtonRemove, Header,
} from './styles';

import Todo from '../Todo';

const TodoList = ({
  section, todos, toggleCheck, deleteTodo, deleteAllDone, editTodo,
}) => {
  const actualSection = section !== 'Undone';
  return (
    <Container>
      <Header>
        <Title>{section}</Title>
        {section === 'Done' && (
          <ButtonRemove onClick={() => deleteAllDone()}>Clear all done</ButtonRemove>
        )}
      </Header>
      <Todos>
        {todos
          .filter(t => t.done === actualSection)
          .map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleCheck={toggleCheck}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              section={section}
            />
          ))}
      </Todos>
    </Container>
  );
};

TodoList.propTypes = {
  section: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      done: PropTypes.bool,
    }),
  ).isRequired,
  toggleCheck: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  deleteAllDone: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoList;
