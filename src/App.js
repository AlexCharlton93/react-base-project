import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Pages/header/header';
import Routes from './common/routes/routes';

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
