import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const Router = useRouter();

  useEffect(() => {
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('jwtToken') : null;
    const secret = '4C826ceRu289';

    if (!token || !secret) {
      Router.replace('/login');
      return;
    }

    new Promise((resolve, reject) => {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) reject(err);
        else resolve(decoded);
      });
    })
      .then(decoded => {
        setUser(decoded);
      })
      .catch(err => {
        console.error('JWT verification error:', err);
        Router.replace('/login');
      });
  }, []);

  const contextValue = {
    user,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
