import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/About';
import HomePage from '../pages/Home';
import JobsPage from '../pages/Jobs';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="jobs" element={<JobsPage />} />
    </Routes>
  );
}
