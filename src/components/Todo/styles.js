import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  min-width: 200px;
  border-radius: 5px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

export const TodoDiv = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 10px 10px;
`;

export const TodoCheck = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

export const TodoText = styled.p`
  flex: 1;
  font-size: 18px;
  margin-right: 10px;
`;

export const TodoEdit = styled.button`
  margin-right: 5px;
`;

export const TodoDelete = styled.button``;
