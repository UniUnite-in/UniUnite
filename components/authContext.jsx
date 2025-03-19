import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    // Mock authentication
    if (email === 'test@uniunite.com' && password === 'password') {
      setUser({ email });
      return true;
    }
    return false;
  };

  const signUp = (email, password) => {
    // Mock sign-up logic
    setUser({ email });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
