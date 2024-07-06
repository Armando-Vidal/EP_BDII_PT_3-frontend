import React from 'react';

const Resultado = ({ result }) => {
  if (!result) return null;

  return (
    <div>
      <h3>Resultado:</h3>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default Resultado;
