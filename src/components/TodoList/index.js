import React, { Component } from 'react';

import {
  Container, Title, Todos, ButtonRemove, Header,
} from './styles';

import Todo from '../Todo';

class TodoList extends Component {
  render() {
    const {
      section, todos, toggleCheck, deleteTodo, deleteAllDone, editTodo,
    } = this.props;
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
              />
            ))}
        </Todos>
      </Container>
    );
  }
}

export default TodoList;
