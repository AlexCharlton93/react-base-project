import React, { createContext } from 'react';
import jwtDecode from 'jwt-decode';

const UserContext = createContext(null);

export { UserContext }

const User = ({ children }) => {
  let user;

  const getUserId = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const { userId }: any = jwtDecode(token);
      return userId;
    }
    return 'invalid_user_id';
  }

  const isAuthenticated = () => {
    const token: string = localStorage.getItem('token');
    return !!token;
  }

  if (!user) {
    user = {
      getUserId,
      isAuthenticated,
    }
  }

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export default User;
