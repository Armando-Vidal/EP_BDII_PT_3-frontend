import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CancelarConsulta from './components/CancelarConsulta';
import MarcarConsulta from './components/MarcarConsulta';
import MarcarMedico from './components/MarcarMedico';
import MarcarEspecialidade from './components/MarcarEspecialidade';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marcar-consulta" element={<MarcarConsulta />} />
          <Route path="/marcar-por-medico" element={<MarcarMedico />} />
          <Route path="/marcar-por-especialidade" element={<MarcarEspecialidade />} />
          <Route path="/cancelar-consulta" element={<CancelarConsulta />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
