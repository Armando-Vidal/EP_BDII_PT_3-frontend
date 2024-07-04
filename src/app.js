import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Formulario from './formulario';
import Home from './pages/home';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/marcar-consulta" component={Formulario} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
