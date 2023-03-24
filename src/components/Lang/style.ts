import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  color: ${({ theme }) => theme.colors.third};
  align-items: center;
  justify-content: flex-end;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  &:after {
    content: ' / ';
    display: block;
    margin: 0 3px;
    font-size: 20px;
  }

  &:last-child {
    &:after {
      display: none;
    }
  }

  @media (max-width: 1700px) {
    &:after {
      font-size: 16px;
    }
  }
`;

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.third};
  transition: all 0.3s;
  font-size: 20px;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 1700px) {
    font-size: 16px;
  }
`;
