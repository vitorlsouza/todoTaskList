import React from 'react';
import PropTypes from 'prop-types';

import { Container, Description, ButtonSave } from './styles';

const ModalPaper = ({ description, changeInput, saveTodo }) => (
  <Container>
    <Description value={description} onChange={e => changeInput(e)} />
    <ButtonSave type="button" onClick={() => saveTodo()}>
      save
    </ButtonSave>
  </Container>
);

ModalPaper.propTypes = {
  description: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  saveTodo: PropTypes.func.isRequired,
};

export default ModalPaper;
