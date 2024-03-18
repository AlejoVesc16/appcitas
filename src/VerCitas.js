import React from 'react';
import { useCitas } from './CitasContext';
import './VerCitas.css';

const VerCitas = () => {
  const { citas, agregarCita } = useCitas();

  const formatHour = (hour) => {
    const date = new Date(`2023-01-01T${hour}:00Z`);
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  // Función para organizar las citas por día y fecha
  const organizarCitas = () => {
    const citasOrganizadas = {};
    citas.forEach((cita) => {
      const fecha = new Date(`${cita.fecha}T${cita.horaInicio}:00Z`);
      const diaSemana = fecha.toLocaleDateString('es-ES', { weekday: 'long' });
      const diaYFecha = fecha.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

      if (!citasOrganizadas[diaYFecha]) {
        citasOrganizadas[diaYFecha] = { diaSemana, citas: [] };
      }

      citasOrganizadas[diaYFecha].citas.push({ horaInicio: formatHour(cita.horaInicio), ...cita });
    });

    for (const diaYFecha in citasOrganizadas) {
      citasOrganizadas[diaYFecha].citas.sort((a, b) => a.horaInicio.localeCompare(b.horaInicio));
    }

    return citasOrganizadas;
  };

  const citasOrganizadas = organizarCitas();

  const eliminarCita = (cita) => {
    const nuevasCitas = citas.filter((c) => c.id !== cita.id);
    agregarCita(nuevasCitas);
  };

  return (
    <div>
      <h2>Ver Citas</h2>
      {Object.entries(citasOrganizadas).map(([diaYFecha, { diaSemana, citas }]) => (
        <div key={diaYFecha}>
          <h3>{diaYFecha}</h3>
          <ul>
            {citas.map((cita, index) => (
              <li key={index} className="ver-citas-item">
                <p>{cita.horaInicio} - {formatHour(cita.horaFin)}</p>
                <p>Servicio: {cita.servicio}</p>
                <p>Cliente: {cita.clienta}</p>
                <p>Costo: {cita.costo}</p>
                <button onClick={() => eliminarCita(cita)}>Eliminar Cita</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default VerCitas;
