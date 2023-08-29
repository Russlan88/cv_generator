import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Importa useRouter

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter(); // Inizializza useRouter

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4200/login/validateUser',
        {
          email,
          password,
        },
      );

      if (response.data && response.data.email) {
        setIsLoggedIn(true);
        console.log('Tentativo di reindirizzamento alla dashboard'); // Debugging
        router.push('/dashboard'); // Usa router per reindirizzare
      } else {
        setErrorMessage('Errore durante il login');
      }
    } catch (error) {
      setErrorMessage('Errore durante il login');
    }
  }

  return (
    <>
      <div>Login</div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email-input">Email:</label>
          <input
            type="email"
            id="email-input"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password-input">Password:</label>
          <input
            type="password"
            id="password-input"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
