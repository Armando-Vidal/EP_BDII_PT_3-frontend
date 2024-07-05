import React from 'react';
import Formulario from './components/Formulario';
import api from './api/axiosconfig'; // Importe o axios para fazer requisições HTTP

const MarcarConsulta = () => {
  return (
    <div>
      <h2>Marcar Consulta</h2>
      <Formulario />
    </div>
  );
};

export default MarcarConsulta;
