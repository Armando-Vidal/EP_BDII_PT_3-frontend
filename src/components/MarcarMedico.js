import React, { useState, useEffect } from 'react';
import axios from '../axiosconfig';

const MarcarMedico = () => {
  const [medico, setMedico] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [medicos, setMedicos] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);
  const [agendas, setAgendas] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchMedicos = async () => {
      try {
        const response = await axios.get(`/medicos`);
        setMedicos(response.data);
      } catch (error) {
        console.error('Erro ao buscar médicos:', error);
      }
    };

      fetchMedicos();
    }, []);
  
  useEffect(() => {
    const fetchEspecialidades = async () => {
      try {
        const response = await axios.get('/especialidades');
        setEspecialidades(response.data);
      } catch (error) {
        console.error('Erro ao buscar especialidades:', error);
      }
    };

    if (medico) {
      fetchEspecialidades();
    } else {
      setEspecialidade([]); // Limpar lista de especialidades se não houver médico selecionad
    }
  }, [medico]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/consultas/medico', { medico, especialidade });
      setAgendas(response.data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Erro ao buscar agendas:', error);
    }
  };

  return (
    <div>
      <h2>Marcar Consulta por Médico</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Médico:</label>
          <select value={medico} onChange={(e) => setMedico(e.target.value)} required>
            <option value="">Selecione um médico</option>
            {medicos.map((med) => (
              <option key={med.Crm} value={med.NomeM}>{med.NomeM}</option>
            ))}
          </select>
        </div>        
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

export default MarcarMedico;
