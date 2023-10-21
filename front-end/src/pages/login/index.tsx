import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import './style.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      console.log('Sta per cambiare la route:', url);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:4200/auth/login', {
        email,
        password,
      });

      if (response.data.message === 'Login successful') {
        localStorage.setItem('jwtToken', response.data.token); // Removed await
        console.log('Token impostato, reindirizzamento alla dashboard...');
        router.push('/dashboard'); // Removed await
      } else {
        setErrorMessage('Errore durante il login');
      }
    } catch (error) {
      console.error('Errore durante il login:', error);
      setErrorMessage('Errore durante il login');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="login">
      <h1>Login</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            id="email"
            value={email}
            placeholder="email"
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            id="password"
            value={password}
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-large">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
