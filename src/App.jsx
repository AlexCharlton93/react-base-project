import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Routes from './Common/Routes';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
