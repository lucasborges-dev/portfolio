import React from 'react';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/router';
import Header from './layout/header';
import { Container, Main } from './style';
import { LangProvider } from './context/lang';
import LangComp from './components/Lang';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LangProvider>
        <BrowserRouter>
          <Container>
            <Header />
            <Main>
              <LangComp />
              <Router />
            </Main>
          </Container>
        </BrowserRouter>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
