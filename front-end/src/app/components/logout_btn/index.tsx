import React, { useState } from 'react';
import Router from 'next/router';
import './style.scss';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4200';

const LogoutButton = ({ onLogout }) => {
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);

    fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
    })
      .then(response => {
        if (response.ok) {
          console.log('Logout effettuato con successo');
          onLogout();
          Router.push('/login');
        } else {
          console.log('Errore durante il logout');
        }
      })
      .catch(error => {
        console.log('Errore di rete: ', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <button className="button type1" onClick={handleLogout} disabled={loading}>
      {loading ? 'Logging out...' : 'Log out'}
    </button>
  );
};

export default LogoutButton;
