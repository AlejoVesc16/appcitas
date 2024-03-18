import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importa el archivo CSS

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulamos la lógica de autenticación con un usuario y contraseña predefinidos.
    const validUsername = 'licethtamayo';
    const validPassword = 'liceth123';

    if (username === validUsername && password === validPassword) {
      onLogin(username);
      navigate('/home');
    } else {
      alert('Usuario o contraseña incorrectos. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Usuario:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label>Contraseña:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;
