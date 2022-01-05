import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Routes from './common/Routes';
import { UserContext } from './common/User';

const App = () => {
  const user = useContext(UserContext);
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(user ? user.isAuthenticated() : false);
  }, [user]);

  return (
    <BrowserRouter>
      {isAuthenticated ? <Header /> : null}
      <Routes />
    </BrowserRouter>
  );
}

export default App;
