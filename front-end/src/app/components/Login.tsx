import React from 'react';

const Login: React.FC = () => {
  return (
    <>
      <div>Login</div>
      <form>
        <div>
          <label for="email-input">Email:</label>
          <input type="email" id="email-input" name="email" required />
        </div>
        <div>
          <label for="password-input">Password:</label>
          <input type="password" id="password-input" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
