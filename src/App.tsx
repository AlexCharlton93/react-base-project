import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Routes from './common/Routes';
import { UserContext } from './common/User';
import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from './common/DefaultTheme';

const App = () => {
  const user = useContext(UserContext);
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(user ? user.isAuthenticated() : false);
  }, [user]);

  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        {isAuthenticated ? <Header /> : null}
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
