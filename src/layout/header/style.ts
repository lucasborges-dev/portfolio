import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.second};
  width: 285px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;

  @media (max-width: 1700px) {
    width: 240px;
  }
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.third};
  font-size: 30px;
  font-weight: bold;
  font-family: 'IBM Plex Serif', serif;

  @media (max-width: 1700px) {
    font-size: 26px;
  }
`;

export const Nav = styled.nav`
  color: ${({ theme }) => theme.colors.third};
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MenuLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.third};
  font-weight: 400;
  padding: 10px 0;
  display: inline-block;
  margin: 5px 0;
  font-size: 20px;
  transition: all 0.1s;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.accent};
    width: 0;
    left: -3px;
    z-index: -1;
    top: 55%;
    transform: translateY(-50%);
    transition: all 0.3s;
  }

  &:hover,
  &.active {
    font-weight: bold;

    &:before {
      width: 120%;
    }
  }

  @media (max-width: 1700px) {
    font-size: 17px;
  }
`;
