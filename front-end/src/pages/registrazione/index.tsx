import React from 'react';
import RegisterForm from '../../app/components/RegisterForm';
import './style.scss';

const RegistrationPage: React.FC = () => {
  return (
    <div className="wrapper-container">
      <div className="visual">
        <h1>Registrati con fiducia, i tuoi dati sono blindati.</h1>
      </div>
      <div className="form-wrapper">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
