import React from 'react';
import { Redirect } from 'react-router-dom';

type ComponentProps = {
  Component: any;
  history: String[];
};

const ProtectedRoute: React.VFC<ComponentProps> = ({ Component, history }) => {
  const isAuthenticated = localStorage.getItem('token');

  if (isAuthenticated) {
    return <Component history={history} />;
  }

  return (
    <Redirect to={{ pathname: '/login' }} />
  );
}

export default ProtectedRoute;
