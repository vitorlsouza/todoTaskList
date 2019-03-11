import React, { Component } from 'react';
import api from '../../services/api';
import Modal from 'react-responsive-modal';
import ModalPaper from '../../components/ModalPaper';

import { Container, FormTodo, InputTodo, ButtonTodo, Section } from './styles';

import TodoList from '../../components/TodoList';

class Main extends Component {
  state = {
    section: ['Undone', 'Done'],
    todos: [],
    inputText: '',
    checkeds: [],
    editId: null,
    open: false,
    done: null,
  };

  componentDidMount() {
    this.updateAllTodo();
  }

  updateAllTodo = () => {
    api.post('challenge.get-task').then(res => this.setState({ todos: res.data }));
  };

  handleChangeInput = e => {
    const todoText = e.target.value;

    this.setState({ inputText: todoText });
  };

  handleAddTodo = e => {
    e.preventDefault();
    const { inputText } = this.state;

    const task = {
      description: inputText,
      done: false,
    };

    api.post('challenge.post-task', task).then(
      res => this.updateAllTodo(),
      () => {
        this.setState({ inputText: '' });
      },
    );
  };

  handleToggleCheck = e => {
    const todoId = +e.target.name;

    this.state.todos.map(todo => {
      if (todo.id === todoId) {
        const task = {
          ...todo,
          done: !todo.done,
        };
        this.handleUpdateTodo(task);
      }
    });
  };

  handleUpdateTodo = task => {
    api.post('challenge.put-task', task).then(res => this.updateAllTodo());
  };

  handleDeleteTodo = e => {
    const idTodo = +e.target.name;
    const ids = { ids: [idTodo] };
    api.post('challenge.delete-task', ids).then(res => this.updateAllTodo());
  };

  handleDeleteCheckedTodos = () => {
    const checkeds = this.state.todos.filter(todo => todo.done === true).map(t => t.id);
    this.setState({ checkeds }, () => {
      api.post('challenge.delete-task', { ids: checkeds }).then(res => this.updateAllTodo());
    });
  };

  handleEditTodo = e => {
    const idTodo = +e.target.id;

    const editTodo = this.state.todos.filter(todo => todo.id === idTodo).map(t => t.description);

    this.setState({ inputText: editTodo, editId: idTodo, done: false }, () => {
      this.onOpenModal();
    });
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleSaveTodo = () => {
    const { editId, inputText, done } = this.state;
    const task = {
      id: editId,
      description: inputText,
      done,
    };
    this.handleUpdateTodo(task);
    this.onCloseModal();
    this.setState({ inputText: '' });
  };

  render() {
    const { section, todos, inputText, open, editId } = this.state;
    console.log(todos);
    return (
      <Container>
        <FormTodo onSubmit={this.handleAddTodo}>
          <InputTodo
            type="text"
            placeholder="Inserir tarefa"
            onChange={this.handleChangeInput}
            value={inputText}
          />
          <ButtonTodo type="submit">Add Todo</ButtonTodo>
        </FormTodo>
        <Section>
          {section.map(s => (
            <TodoList
              key={s}
              section={s}
              todos={todos}
              toggleCheck={this.handleToggleCheck}
              deleteTodo={this.handleDeleteTodo}
              deleteAllDone={this.handleDeleteCheckedTodos}
              editTodo={this.handleEditTodo}
            />
          ))}
        </Section>
        <Modal open={open} onClose={this.onCloseModal} center>
          <ModalPaper
            description={inputText}
            changeInput={this.handleChangeInput}
            saveTodo={this.handleSaveTodo}
          />
        </Modal>
      </Container>
    );
  }
}

export default Main;
