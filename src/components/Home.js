import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Bem-vindo à CLIMED</h2>
      <div>
        <Link to="/marcar-consulta">Marcar Consulta</Link>
      </div>
      <div>
        <Link to="/cancelar-consulta">Cancelar Consulta</Link>
      </div>
    </div>
  );
};

export default Home;
