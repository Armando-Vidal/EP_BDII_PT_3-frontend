import React, { useState, useEffect } from 'react';
import axios from 'axiosconfig'; // Importe o axios para fazer requisições HTTP

const formulario = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [preferredDoctor, setPreferredDoctor] = useState('');
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('/medicos');
        setDoctors(response.data);
      } catch (error) {
        console.error('Erro ao buscar médicos:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/consultas', {
        NomeP: name,
        TelefonePac: phone,
        NomeE: specialty,
        NomeM: preferredDoctor,
      });
      console.log('Consulta marcada com sucesso:', response.data);
      // Limpar os campos após submissão
      setName('');
      setPhone('');
      setSpecialty('');
      setPreferredDoctor('');
    } catch (error) {
      console.error('Erro ao marcar consulta:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Telefone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div>
        <label>Especialidade:</label>
        <input type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} required />
      </div>
      <div>
        <label>Médico Preferencial:</label>
        <select value={preferredDoctor} onChange={(e) => setPreferredDoctor(e.target.value)}>
          <option value="">Selecione um médico</option>
          {doctors.map((doctor) => (
            <option key={doctor.Crm} value={doctor.NomeM}>
              {doctor.NomeM}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Marcar Consulta</button>
    </form>
  );
};

export default formulario;
