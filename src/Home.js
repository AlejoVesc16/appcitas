// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ username }) => {
  return (
    <>
      <h2>Bienvenida {username}!</h2>
      <p>¡Has iniciado sesión con éxito!</p>

      <div className="button-container">
        <Link to="/menu"> {/* Cambié "/menu0" a "/menu" */}
          <button>Perfil 1</button>
        </Link>

        <Link to="/menu1"> {/* Mantuve "/Menu1" si es intencional */}
          <button>Perfil 2</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
