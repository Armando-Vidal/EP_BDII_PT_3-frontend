import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Bem-vindo à CLIMED</h2>
      <Link to="/marcar-consulta">Marcar Consulta</Link>
    </div>
  );
};

export default Home;
