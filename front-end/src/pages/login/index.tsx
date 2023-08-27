import React, { useState } from 'react';
import axios from 'axios'; // Assicurati di aver installato 'axios' se non l'hai già fatto

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
      } else {
        setErrorMessage('Errore durante il login');
      }
    } catch (error) {
      setErrorMessage('Errore durante il login');
    }
  }

  if (isLoggedIn) {
    return <div>Benvenuto!</div>;
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
