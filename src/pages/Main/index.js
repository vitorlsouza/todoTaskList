import React, { Component } from 'react';
import api from '../../services/api';

import {
  Container, FormTodo, InputTodo, ButtonTodo,
} from './styles';

class Main extends Component {
  componentDidMount() {
    const header = {
      'challenge-token': 'df27bfc9e8bf54054bd575d2ae9e7e9a',
    };
    api.post('challenge.get-task', { headers: header }).then(res => console.log(res));
  }

  render() {
    return (
      <Container>
        <FormTodo onSubmit={() => {}}>
          <InputTodo type="text" placeholder="Inserir tarefa" />
          <ButtonTodo type="submit">Add Todo</ButtonTodo>
        </FormTodo>
      </Container>
    );
  }
}

export default Main;
