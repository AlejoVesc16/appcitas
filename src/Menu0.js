// Menu0.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu0.css'; 

const Menu0 = () => {
  return (
    <div className="menu-container">
      <h2 className="menu-title">Menú</h2>
      <ul className="menu-list">
        <li><Link to="/agendar-citas" className="menu-link">Agendar Citas</Link></li>
        <li><Link to="/ver-citas" className="menu-link">Ver Citas</Link></li>
        <li><Link to="/gastos" className="menu-link">Gastos</Link></li>
        <li><Link to="/estadisticas" className="menu-link">Estadísticas</Link></li>
      </ul>
    </div>
  );
};

export default Menu0;
