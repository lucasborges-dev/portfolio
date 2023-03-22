import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
  width: 100vw;
  display: flex;
`;

export const Main = styled.main`
  flex: 1;
  padding: 30px;
`;
