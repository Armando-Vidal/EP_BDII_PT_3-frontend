import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Formulario from './formulario';
import Home from './pages/home';
import MarcarConsulta from './pages/marcarConsulta';
import gerenciarConsultas from './pages/gerenciarConsultas';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/marcar-consulta" component={MarcarConsulta} />
          <Route path="/gerenciar-consultas" component={gerenciarConsultas} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
