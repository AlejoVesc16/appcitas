import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Menu0 from './Menu0';
import AgendarCitas from './AgendarCitas';
import VerCitas from './VerCitas';
import Gastos from './Gastos';
import Estadisticas from './Estadisticas'; // Agrega la importación para Estadisticas
import { CitasProvider } from './CitasContext';
import { GastosProvider } from './GastosContext';

const App = () => {
  const onLogin = (username) => {
    console.log(`Usuario ${username} ha iniciado sesión.`);
  };

  return (
    <CitasProvider>
      <GastosProvider>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login onLogin={onLogin} />} />
            <Route path="/menu" element={<Menu0 />} />
            <Route path="/agendar-citas" element={<AgendarCitas />} />
            <Route path="/ver-citas" element={<VerCitas />} />
            <Route path="/gastos" element={<Gastos />} />
            <Route path="/estadisticas" element={<Estadisticas />} /> {/* Agrega la ruta para Estadisticas */}
          </Routes>
        </Router>
      </GastosProvider>
    </CitasProvider>
  );
};

export default App;
