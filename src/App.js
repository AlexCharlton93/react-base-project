import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './common/header/Header';
import Routes from './common/routes/Routes';

export default function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes />
      </Router>
    </>
  );
}
