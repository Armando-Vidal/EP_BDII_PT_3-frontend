import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from './api/axiosConfig';

const gerenciarConsultas = () => {
  const [consultations, setConsultations] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentConsultation, setCurrentConsultation] = useState(null);

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

  const handleDelete = async (id) => {
    try {
      await api.delete(`/consultas/${id}`);
      setConsultations(consultations.filter((consultation) => consultation.IdCon !== id));
    } catch (error) {
      console.error('Erro ao excluir consulta:', error);
    }
  };

  const handleEdit = (consultation) => {
    setEditMode(true);
    setCurrentConsultation(consultation);
  };

  const handleUpdate = async (updatedConsultation) => {
    try {
      const response = await api.put(`/consultas/${updatedConsultation.IdCon}`, updatedConsultation);
      setConsultations(
        consultations.map((consultation) =>
          consultation.IdCon === updatedConsultation.IdCon ? response.data : consultation
        )
      );
      setEditMode(false);
      setCurrentConsultation(null);
    } catch (error) {
      console.error('Erro ao atualizar consulta:', error);
    }
  };

  return (
    <div>
      <h2>Gerenciar Consultas</h2>
      {editMode ? (
        <EditConsulta
          consultation={currentConsultation}
          onUpdate={handleUpdate}
          onCancel={() => setEditMode(false)}
        />
      ) : (
        <div>
          <Link to="/marcar-consulta">Marcar Nova Consulta</Link>
          <h3>Lista de Consultas</h3>
          <ul>
            {consultations.map((consultation) => (
              <li key={consultation.IdCon}>
                {consultation.Dia} - {consultation.HoraInicCon} - {consultation.NomeE} com {consultation.NomeM}
                <button onClick={() => handleEdit(consultation)}>Editar</button>
                <button onClick={() => handleDelete(consultation.IdCon)}>Excluir</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const EditConsulta = ({ consultation, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({ ...consultation });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Dia:</label>
        <input type="date" name="Dia" value={formData.Dia} onChange={handleChange} required />
      </div>
      <div>
        <label>Hora Início:</label>
        <input type="time" name="HoraInicCon" value={formData.HoraInicCon} onChange={handleChange} required />
      </div>
      <div>
        <label>Especialidade:</label>
        <input type="text" name="NomeE" value={formData.NomeE} onChange={handleChange} required />
      </div>
      <div>
        <label>Médico:</label>
        <input type="text" name="NomeM" value={formData.NomeM} onChange={handleChange} required />
      </div>
      <button type="submit">Atualizar Consulta</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
};

export default gerenciarConsultas;
