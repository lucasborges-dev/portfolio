import React from 'react';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import Header from './layout/header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
