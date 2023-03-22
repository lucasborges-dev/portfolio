import styled from 'styled-components';

export const Button = styled.button`
  height: 56px;
  margin-top: 48px;
  background-color: ${({ theme }) => theme.colors.accent};
  border: 0;
  color: ${({ theme }) => theme.colors.third};
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  transition: all 0.3s;

  span {
    margin-right: 8px;
  }
`;
