import React, { useState } from 'react';
import Router from 'next/router';
import './style.scss';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4200';

const LogoutButton = ({ onLogout }) => {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Errore durante il logout');
      }

      // Se la richiesta di logout ha avuto successo, pulisci le informazioni di autenticazione
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('userName');

      onLogout();

      // Reindirizza l'utente alla pagina di login
      Router.push('/');
    } catch (error) {
      console.error('Errore:', error.message || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button className="button type1" onClick={handleLogout} disabled={loading}>
      {loading ? 'Logging out...' : 'Log out'}
    </button>
  );
};

export default LogoutButton;
