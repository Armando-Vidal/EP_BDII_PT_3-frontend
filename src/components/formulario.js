import React, { useState } from 'react';

const formulario = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [preferredDoctor, setPreferredDoctor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para submeter os dados do formulário
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
        <input type="text" value={preferredDoctor} onChange={(e) => setPreferredDoctor(e.target.value)} />
      </div>
      <button type="submit">Marcar Consulta</button>
    </form>
  );
};

export default formulario;
