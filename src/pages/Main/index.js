import React, { Component } from 'react';
import api from '../../services/api';

import { Container, FormTodo, InputTodo, ButtonTodo, Section } from './styles';

import TodoList from '../../components/TodoList';

class Main extends Component {
  state = {
    section: ['Undone', 'Done'],
    todos: [],
    inputText: '',
  };

  componentDidMount() {
    this.updateTask();
  }

  updateTask = () => {
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

    api.post('challenge.post-task', task).then(res => this.updateTask());
  };

  handleToggleCheck = e => {
    const todoId = +e.target.name;
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo,
      ),
    });
  };

  render() {
    const { section, todos } = this.state;
    console.log(todos);
    return (
      <Container>
        <FormTodo onSubmit={this.handleAddTodo}>
          <InputTodo type="text" placeholder="Inserir tarefa" onChange={this.handleChangeInput} />
          <ButtonTodo type="submit">Add Todo</ButtonTodo>
        </FormTodo>
        <Section>
          {section.map(s => (
            <TodoList key={s} section={s} todos={todos} toggleCheck={this.handleToggleCheck} />
          ))}
        </Section>
      </Container>
    );
  }
}

export default Main;
