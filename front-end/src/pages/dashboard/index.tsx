import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true); // Aggiungi uno stato di caricamento
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Simula una verifica asincrona del token
    const token = localStorage.getItem('authToken');

    if (token) {
      // Simula la verifica del token
      setIsAuthenticated(true); // Imposta come autenticato se il token è valido
    }

    setIsLoading(false); // Imposta il caricamento come falso una volta che il controllo è completo
  }, []);

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return <p>Loading...</p>; // Mostra un loader o un segnaposto durante il caricamento
  }

  if (!isAuthenticated) {
    return null; // Non renderizzare nulla se non è autenticato e il caricamento è completo
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Resto del tuo componente */}
    </div>
  );
};

export default Dashboard;
