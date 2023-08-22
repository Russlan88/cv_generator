import React, { useState } from 'react';
import ImageUpload from '../components/ImageUploader';
// import { useMutation } from '@apollo/client';
// import gql from 'graphql-tag';

// const REGISTER_MUTATION = gql`
//   mutation Register($username: String!, $email: String!, $password: String!) {
//     register(username: $username, email: $email, password: $password) {
//       id
//       username
//       email
//     }
//   }
// `;

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // const [register] = useMutation(REGISTER_MUTATION);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await register({ variables: formData });
      console.log('Registration Success:', data);
    } catch (error) {
      console.error('Registration Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ImageUpload />
      <label htmlFor="username-id">Username</label>
      <input
        type="text"
        id="username-id"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="email-id">Email</label>
      <input
        type="email"
        id="email-id"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="password-id">Password</label>
      <input
        type="password"
        id="password-id"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">Registrati</button>
    </form>
  );
};

export default RegisterForm;
