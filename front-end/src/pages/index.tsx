import React from 'react';
import Link from 'next/link';
const Home: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My CV Generator</h1>
      </header>
      <main>
        <p>Create professional CVs in minutes!</p>
        <Link href="/registrazione">
          <button>Go to Registration</button>
        </Link>
      </main>
      <footer>
        <p>© 2023 My CV Creator</p>
      </footer>
    </div>
  );
};

export default Home;
