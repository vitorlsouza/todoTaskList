import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Todos = styled.div``;

export const Title = styled.h2`
  color: #fff;
`;

export const ButtonRemove = styled.button`
  height: 30px;
  padding: 0 20px;
  background-color: #d11a2a;
  color: #fff;
  border: 0;
  font-size: 20px;
  margin-left: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #ed1e30;
    cursor: pointer;
  }
`;
