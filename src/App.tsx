import React from 'react';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import Header from './layout/header';
import { Container, Main } from './style';
import { LangProvider } from './context/lang';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LangProvider>
        <Container>
          <Header />
          <Main>
            <RouterProvider router={router} />
          </Main>
        </Container>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
