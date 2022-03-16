import { useState, useContext } from 'react';
import { UserContext } from './UserContext';

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
      userContext.setUser({ name: 'sam', email: 'sam@expample.com' });
    
  };
  const handleLogout = () => {
      userContext.setUser(null);
    
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>user name {userContext.user?.name}</div>
      <div>User email {userContext.user?.email}</div>
    </div>
  );
};
