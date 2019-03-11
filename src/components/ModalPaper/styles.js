import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  height: 100px;
`;

export const Description = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 5px;
`;

export const ButtonSave = styled.button`
  width: 100px;
  height: 40px;
  padding: 10px 10px;
  margin-top: 20px;
  color: #fff;
  font-size: 16px;
  background-color: #25963c;

  &:hover {
    background-color: #58ad69;
  }
`;
