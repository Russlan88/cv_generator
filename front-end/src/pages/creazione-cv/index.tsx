import React, { useState } from 'react';
import './style.scss';
import Image from 'next/image';

const CreazioneCV: React.FC = () => {
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [esperienza, setEsperienza] = useState('');

  const handleSubmit = () => {
    // Qui puoi gestire l'invio dei dati, per esempio salvare il CV in un database o generare un PDF
    alert(`Nome: ${nome}\nCognome: ${cognome}\nEsperienza: ${esperienza}`);
  };

  return (
    <div className="cv-form-initiator">
      <p>Create your cv</p>
      <div className="cv-form-initiator__header">
        <div className="slogan">Motivato, dinamico e curioso</div>
        <div className="cv-form-initiator__figure">
          <Image
            src="/test.jpg"
            alt="Descrizione"
            width={400}
            height={400} // Imposta un'altezza che corrisponde alla larghezza per mantenere il rapporto
            style={{ objectFit: 'cover' }}
            unoptimized={true}
            className="cv-form-initiator__image"
          />
        </div>
        <div className="cv-form-initiator__description">
          <div className="cv-form-initiator__fullname">Christian Silvestri</div>
          <h2 className="cv-form-initiator__title">Presentazione</h2>{' '}
          {/* Deve essere dinamico e traducibile in qualsiasi lingua */}
          <p className="cv-form-initiator__description">
            Ciao, sono uno sviluppatore Full Stack con competenze in JavaScript,
            React e Node.js, appassionato di nuove sfide e di apprendimento
            continuo. Nel tempo libero, esploro l'Intelligenza Artificiale e
            Python, puntando a contribuire all'innovazione continua.
          </p>
        </div>
      </div>
      {/* <h1 className="cv-form-initiator__title">Creazione CV</h1> */}

      {/* <div className="applicant-entry-fields">
        <label className="applicant-entry-fields__label">Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          className="applicant-entry-fields__input"
        />
      </div>

      <div className="applicant-entry-fields">
        <label className="applicant-entry-fields__label">Cognome:</label>
        <input
          type="text"
          value={cognome}
          onChange={e => setCognome(e.target.value)}
          className="applicant-entry-fields__input"
        />
      </div>

      <div className="applicant-entry-fields">
        <label className="applicant-entry-fields__label">Esperienza:</label>
        <textarea
          value={esperienza}
          onChange={e => setEsperienza(e.target.value)}
          className="applicant-entry-fields__input"
        />
      </div>

      <button onClick={handleSubmit} className="cta-submit">
        Invia
      </button> */}
    </div>
  );
};

export default CreazioneCV;
