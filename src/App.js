import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './common/Header';
import Routes from './common/Routes';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}
