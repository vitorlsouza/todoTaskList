import React, { Component } from 'react';

import { Container, Description, ButtonSave } from './styles';

class ModalPaper extends Component {
  render() {
    const { description, changeInput, saveTodo } = this.props;
    return (
      <Container>
        <Description value={description} onChange={e => changeInput(e)} />
        <ButtonSave type="button" onClick={() => saveTodo()}>
          save
        </ButtonSave>
      </Container>
    );
  }
}

export default ModalPaper;
