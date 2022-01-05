import React from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ Component, history }) => {
  const isAuthenticated = localStorage.getItem('token');

  if (isAuthenticated) {
    return <Component history={history} />;
  }

  return (
    <Redirect to={{ pathname: '/login' }} />
  );
}

export default ProtectedRoute;
