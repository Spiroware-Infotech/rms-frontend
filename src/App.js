import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutesWithLayout from './AppRoutesWithLayout';

function App() {
  return (
    <Router>
      <AppRoutesWithLayout />
    </Router>
  );
}

export default App;
