import React, { useState, useEffect } from 'react';
import MedicosList from './components/MedicosList';
import { Link } from 'react-router-dom';
import api from './api/axiosconfig'; // Importe o axios para fazer requisições HTTP

const Home = () => {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const response = await api.get('/consultas');
        setConsultations(response.data);
      } catch (error) {
        console.error('Erro ao buscar consultas:', error);
      }
    };

    fetchConsultations();
  }, []);

  return (
    <div>
      <h2>Bem-vindo à CLIMED</h2>
      <MedicosList />
      <Link to="/marcar-consulta">Marcar Consulta</Link>

      <h3>Próximas Consultas:</h3>
      <ul>
        {consultations.map((consultation) => (
          <li key={consultation.IdCon}>
            {consultation.Dia} - {consultation.HoraInicCon} - {consultation.NomeE} com {consultation.NomeM}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
