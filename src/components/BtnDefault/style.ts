import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  margin-top: 48px;

  @media (max-width: 1700px) {
    margin-top: 40px;
  }
`;

export const Button = styled.button`
  height: 56px;
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
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    width: 90%;
    position: absolute;
    z-index: -1;
    height: 90%;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s;
  }

  span {
    margin-right: 8px;
  }

  &:hover {
    &:before {
      left: 15%;
      top: 25%;
      opacity: 1;
    }
  }

  @media (max-width: 1700px) {
    height: 50px;
    font-size: 16px;
    padding: 0px 35px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
