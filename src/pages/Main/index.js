import React, { Component } from 'react';
import api from '../../services/api';

import { Container, FormTodo, InputTodo, ButtonTodo, Section } from './styles';

import TodoList from '../../components/TodoList';

class Main extends Component {
  state = {
    section: ['Undone', 'Done'],
    todos: [],
  };

  componentDidMount() {
    const config = {
      headers: {
        'challenge-token': 'df27bfc9e8bf54054bd575d2ae9e7e9a',
      },
    };
    api.post('challenge.get-task', {}, config).then(res => this.setState({ todos: res.data }));
  }

  render() {
    const { section, todos } = this.state;
    console.log(todos);
    return (
      <Container>
        <FormTodo onSubmit={() => {}}>
          <InputTodo type="text" placeholder="Inserir tarefa" />
          <ButtonTodo type="submit">Add Todo</ButtonTodo>
        </FormTodo>
        <Section>
          {section.map(s => (
            <TodoList section={s} todos={todos} />
          ))}
        </Section>
      </Container>
    );
  }
}

export default Main;
