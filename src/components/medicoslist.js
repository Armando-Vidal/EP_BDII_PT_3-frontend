import React, { useState, useEffect } from 'react';
import api from './api/axiosconfig'; // Importe o axios para fazer requisições HTTP

const MedicosList = () => {
    const [medicos, setMedicos] = useState([]);

    useEffect(() => {
        const fetchMedicos = async () => {
            try {
                const response = await api.get('/medicos');
                setMedicos(response.data);
            } catch (error) {
                console.error("Erro ao buscar médicos", error);
            }
        };

        fetchMedicos();
    }, []);

    return (
        <div>
            <h2>Lista de Médicos</h2>
            <ul>
                {medicos.map((medico) => (
                    <li key={medico.crm}>
                        {medico.nomeM} - {medico.telefoneM}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MedicosList;
