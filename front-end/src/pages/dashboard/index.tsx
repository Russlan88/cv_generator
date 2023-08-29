import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const Dashboard: React.FC = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      try {
        const response = await axios.get('http://localhost:4200/person');
        setPeople(response.data);
      } catch (error) {
        console.error('Errore nel recupero degli utenti', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPeople();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Pannello di controllo</h1>
      <h2>Elenco degli utenti:</h2>
      {people.map((person, index) => (
        <div
          key={index}
          style={{ margin: '20px', padding: '15px', border: '1px solid #ccc' }}
        >
          <h3>
            {person.name} {person.surname}
          </h3>
          <p>Età: {person.age}</p>

          {/* Sezione contatti */}
          <h4>Contatti:</h4>
          <ul>
            <li>Telefono: {person.contatti.telefono}</li>
            <li>Email: {person.contatti.email}</li>
            <li>Indirizzo: {person.contatti.indirizzo}</li>
          </ul>

          <button className="button">Modifica CV</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
