import React, { useState } from 'react';

const CreazioneCV: React.FC = () => {
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [esperienza, setEsperienza] = useState('');

  const handleSubmit = () => {
    // Qui puoi gestire l'invio dei dati, per esempio salvare il CV in un database o generare un PDF
    alert(`Nome: ${nome}\nCognome: ${cognome}\nEsperienza: ${esperienza}`);
  };

  return (
    <div>
      <h1>Creazione CV</h1>

      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
      </div>

      <div>
        <label>Cognome:</label>
        <input
          type="text"
          value={cognome}
          onChange={e => setCognome(e.target.value)}
        />
      </div>

      <div>
        <label>Esperienza:</label>
        <textarea
          value={esperienza}
          onChange={e => setEsperienza(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit}>Invia</button>
    </div>
  );
};

export default CreazioneCV;
