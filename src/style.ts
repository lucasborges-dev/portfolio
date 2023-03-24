import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  padding: 30px;
  padding-left: 285px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: 1700px) {
    padding-left: 240px;
  }
`;
