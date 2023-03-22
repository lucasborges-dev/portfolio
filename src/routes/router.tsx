import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/About';
import HomePage from '../pages/Home';
import JobsPage from '../pages/Jobs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/jobs',
    element: <JobsPage />,
  },
]);

export default router;
