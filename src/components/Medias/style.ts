import styled from 'styled-components';

export const Medias = styled.ul`
  color: ${({ theme }) => theme.colors.third};

  &.row {
    display: flex;

    a {
      margin-top: 0;
      margin-left: 20px;
    }
  }

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
