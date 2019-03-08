import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const FormTodo = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
`;

export const InputTodo = styled.input`
  flex: 1;
  height: 50px;
  padding: 0 20px;
  background-color: #fff;
  border: 0;
  font-size: 18px;
  color: #444;
  border-radius: 3px;
`;

export const ButtonTodo = styled.button`
  height: 50px;
  padding: 0 20px;
  background-color: #f19700;
  color: #fff;
  border: 0;
  font-size: 20px;
  margin-left: 10px;

  &:hover {
    background-color: #ffad25;
    cursor: pointer;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
`;
