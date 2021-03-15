import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #232129;
  color: #666360;
  border: 2px solid #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background-color: transparent;
    color: #f4ede8;
    border: 0;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
