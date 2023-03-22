import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.second};
  width: 15%;
  max-width: 285px;
  padding: 60px;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.third};
  font-size: 30px;
  font-weight: bold;
`;

export const Nav = styled.nav`
  color: ${({ theme }) => theme.colors.third};
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MenuLink = styled.a`
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
`;

export const Medias = styled.ul`
  color: ${({ theme }) => theme.colors.third};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.third};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-top: 12px;
    transition: all 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }
`;
