import React, { useState } from 'react';
import api from '../axiosconfig';
import Resultado from './Resultado';

const CancelarConsulta = () => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [consultas, setConsultas] = useState([]);
  const [result, setResult] = useState(null);

  const handleBuscarConsultas = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`/consultas/paciente?nome=${nomeUsuario}`);
      setConsultas(response.data);
    } catch (error) {
      console.error('Erro ao buscar consultas:', error);
    }
  };

  const handleCancelarConsulta = async (idCon) => {
    try {
      const response = await api.delete(`/consultas/${idCon}`);
      setResult(response.data);
      setConsultas(consultas.filter((consulta) => consulta.IdCon !== idCon));
    } catch (error) {
      console.error('Erro ao cancelar consulta:', error);
    }
  };

  return (
    <div>
      <h3>Cancelar Consulta</h3>
      <form onSubmit={handleBuscarConsultas}>
        <div>
          <label>Nome do Usuário:</label>
          <input type="text" value={nomeUsuario} onChange={(e) => setNomeUsuario(e.target.value)} required />
        </div>
        <button type="submit">Buscar Consultas</button>
      </form>

      {consultas.length > 0 && (
        <>
          <h4>Consultas Encontradas:</h4>
          <ul>
            {consultas.map((consulta) => (
              <li key={consulta.IdCon}>
                {consulta.Dia} - {consulta.HoraInicCon} às {consulta.HoraFimCon} com {consulta.NomeM} ({consulta.NomeE})
                <button onClick={() => handleCancelarConsulta(consulta.IdCon)}>
                  Cancelar Consulta
                </button>
              </li>
            ))}
          </ul>
        </>
      )}

      {result && <Resultado result={result} />}
    </div>
  );
};

export default CancelarConsulta;
