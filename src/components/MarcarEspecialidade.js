import React, { useState, useEffect } from 'react';
import axios from '../axiosconfig';

const MarcarEspecialidade = () => {
  const [especialidade, setEspecialidade] = useState('');
  const [especialidades, setEspecialidades] = useState([]);
  const [agendas, setAgendas] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchEspecialidades = async () => {
      try {
        const response = await axios.get('/especialidades');
        setEspecialidades(response.data);
      } catch (error) {
        console.error('Erro ao buscar especialidades:', error);
      }
    };

    fetchEspecialidades();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/consultas/especialidade', { especialidade });
      setAgendas(response.data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Erro ao buscar agendas:', error);
    }
  };

  return (
    <div>
      <h2>Marcar Consulta por Especialidade</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Especialidade:</label>
          <select value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} required>
            <option value="">Selecione uma especialidade</option>
            {especialidades.map((esp) => (
              <option key={esp.IdEsp} value={esp.NomeE}>{esp.NomeE}</option>
            ))}
          </select>
        </div>
        <button type="submit">Buscar Agendas</button>
      </form>
      {isSubmitted && (
        <>
          <h3>Agendas Disponíveis:</h3>
          <ul>
            {agendas.map((agenda) => (
              <li key={agenda.IdAgenda}>{agenda.DiaSemana} - {agenda.HoraInicio} às {agenda.HoraFim}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MarcarEspecialidade;
