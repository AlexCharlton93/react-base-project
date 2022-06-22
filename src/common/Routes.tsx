import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const Routes = () => {
  return (
    <Switch>
      <Route
        path="/login"
        render={(props) => <Login history={props.history} />}
      />
      <Route
        path="/register"
        render={(props) => <Register history={props.history} />}
      />
      <Route
        path="/"
        render={(props) => (
          <ProtectedRoute Component={Dashboard} history={props.history} />
        )}
      />
    </Switch>
  );
};

export default Routes;
