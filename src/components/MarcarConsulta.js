import React from 'react';
import { Link } from 'react-router-dom';

const MarcarConsulta = () => {
  return (
    <div>
      <h2>Marcar Consulta</h2>
      <div>
      <Link to="/marcar-por-medico">Marcar por Médico</Link>
      </div>
      <div>
      <Link to="/marcar-por-especialidade">Marcar por Especialidade</Link>
      </div>
    </div>
  );
};

export default MarcarConsulta;