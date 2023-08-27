import React, { useState } from 'react';
import axios from 'axios';
import ImageUpload from '../components/ImageUploader';
import Link from 'next/link';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
        setErrorMessage(null);
      } else {
        console.error(
          "Errore durante l'upload o la registrazione:",
          response.data.message,
        );
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(
        "L'indirizzo email fornito è già in uso. Se hai dimenticato la password, puoi recuperarla. Altrimenti, utilizza un altro indirizzo email.",
      );
    }
  };

  return registrationSuccessful ? (
    <>
      <h2>La registrazione &egrave; andata a buon fine</h2>
      <img
        width="200"
        src="https://cdn.dribbble.com/users/251873/screenshots/9289747/media/6ddd0b400fbab6d5fa72d73df503f330.gif"
      />
      <p>
        Ora puoi effettuare il <Link href="/login">login</Link>
      </p>
    </>
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
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button type="submit">Registrati</button>
    </form>
  );
};

export default RegisterForm;
