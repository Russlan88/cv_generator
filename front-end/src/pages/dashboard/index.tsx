import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LogoutButton from '../../app/components/logout_btn/index.tsx';
import './style.css';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    const storedUserName = localStorage.getItem('userName');

    if (token) {
      setIsAuthenticated(true);
    }

    if (storedUserName) {
      setUserName(storedUserName);
    }

    setIsLoading(false);

    // Dopo aver impostato lo stato, controlla se l'utente è autenticato
    if (!isAuthenticated && !isLoading) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading]);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    router.push('/');
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="innerHeader">
      <h1>Benvenuto nella tua Dashboard, {userName}!</h1>
      <LogoutButton onLogout={handleLogout} />
    </div>
  );
};

export default Dashboard;
