import React, { useEffect } from 'react';
import Link from 'next/link';
const Home: React.FC = () => {
  return (
    <div className="welcome-page">
      <header className="header">
        <h1>Welcome to CV Generator</h1>
      </header>
      <main>
        <p>Create professional CVs in minutes!</p>
        <Link href="/login">
          <button>Go to Login</button>
        </Link>
        <Link href="/registrazione">
          <button>Go to Registration</button>
        </Link>
      </main>
      <footer>
        <p>&copy; 2023 CV Creator</p>
      </footer>
    </div>
  );
};

export default Home;
