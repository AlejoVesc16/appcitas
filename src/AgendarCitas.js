// AgendarCitas.js
import React, { useState } from 'react';
import { useCitas } from './CitasContext';
import './AgendarCitas.css';

const AgendarCitas = () => {
  const { agregarCita } = useCitas();
  const serviciosYPrecios = {
    Acrilicas: 80000,
    Dipping: 50000,
    Garantia: 0,
    'Manos Semi Hombre': 25000,
    'Manos Semipermanente': 30000,
    'Manos Tradicional': 14000,
    'Manos y Pies Tradicional': 22000,
    'Pies Semipermanente': 30000,
    'Pies Tradicional': 14000,
    Polygel: 70000,
    'Press On': 65000,
    'Retoque Press On': 50000,
    'Retoque Acrilico': 65000,
    'Retiro Acrilico': 15000,
  };

  const [cita, setCita] = useState({
    horaInicio: '',
    horaFin: '',
    fecha: '',
    servicio: Object.keys(serviciosYPrecios)[0],
    costo: serviciosYPrecios[Object.keys(serviciosYPrecios)[0]],
    clienta: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nuevoCosto = name === 'servicio' ? serviciosYPrecios[value] : cita.costo;

    setCita({
      ...cita,
      [name]: value,
      costo: nuevoCosto,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarCita(cita);
    console.log('Cita Agendada:', cita);
    // Limpiar el formulario después de agregar la cita
    setCita({
      horaInicio: '',
      horaFin: '',
      fecha: '',
      servicio: Object.keys(serviciosYPrecios)[0],
      costo: serviciosYPrecios[Object.keys(serviciosYPrecios)[0]],
      clienta: '',
    });
  };

  return (
    <div className="agendar-citas-container">
      <h2>Agendar Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Servicio:</label>
        <select name="servicio" value={cita.servicio} onChange={handleChange} required>
          {Object.keys(serviciosYPrecios).map((servicio) => (
            <option key={servicio} value={servicio}>
              {servicio}
            </option>
          ))}
        </select>

        <label>Hora de Inicio:</label>
        <input type="time" name="horaInicio" value={cita.horaInicio} onChange={handleChange} required />

        <label>Hora de Fin:</label>
        <input type="time" name="horaFin" value={cita.horaFin} onChange={handleChange} required />

        <label>Fecha:</label>
        <input type="date" name="fecha" value={cita.fecha} onChange={handleChange} required />

        <label>Costo:</label>
        <input type="text" name="costo" value={cita.costo} readOnly />

        <label>Cliente:</label>
        <input type="text" name="clienta" value={cita.clienta} onChange={handleChange} required />

        <button type="submit">Agendar Cita</button>
      </form>
    </div>
  );
};

export default AgendarCitas;
