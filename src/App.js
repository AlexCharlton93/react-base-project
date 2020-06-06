import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Routes from './common/Routes';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}
