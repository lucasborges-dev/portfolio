import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Line = styled.div`
  width: 130px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.accent};

  @media (max-width: 1700px) {
    width: 110px;
  }
`;
