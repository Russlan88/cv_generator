import React, { useState } from 'react';
import axios from 'axios';
import ImageUpload from '../components/ImageUploader';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('Inizio del submit...');

    try {
      const dataToSend = new FormData();

      if (uploadedFile) {
        console.log('Aggiungo il file...');
        dataToSend.append('profileImage', uploadedFile);
      }

      dataToSend.append('username', formData.username);
      dataToSend.append('email', formData.email);
      dataToSend.append('password', formData.password);

      // Log per vedere il contenuto di FormData
      for (var pair of dataToSend.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }

      const response = await axios.post(
        'http://localhost:4200/registration',
        dataToSend,
      );

      if (response.data.message === 'Registrazione completata con successo') {
        console.log(
          'Upload e registrazione completati con successo!',
          response.data,
        );
        setRegistrationSuccessful(true);
      } else {
        console.error(
          "Errore durante l'upload o la registrazione:",
          response.data.message,
        );
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return registrationSuccessful ? (
    <div>Registrazione completata con successo!</div>
  ) : (
    <form onSubmit={handleSubmit}>
      <ImageUpload onFileChange={setUploadedFile} />
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
