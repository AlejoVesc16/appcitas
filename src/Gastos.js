import React, { useState } from 'react';
import { useGastosContext } from './GastosContext';

const Gastos = () => {
  const { gastos, totalGastos, agregarGasto, quitarGasto } = useGastosContext();
  const [nuevoGasto, setNuevoGasto] = useState({ descripcion: '', monto: '' });

  const handleAgregarGasto = () => {
    if (nuevoGasto.descripcion && nuevoGasto.monto) {
      agregarGasto({ ...nuevoGasto, monto: parseFloat(nuevoGasto.monto) });
      setNuevoGasto({ descripcion: '', monto: '' });
    }
  };

  return (
    <div>
      <h2>Gastos</h2>
      <ul>
        {gastos.map((gasto, index) => (
          <li key={index}>
            {gasto.descripcion} - ${gasto.monto}
            <button onClick={() => quitarGasto(index)}>Quitar</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Descripción"
          value={nuevoGasto.descripcion}
          onChange={(e) => setNuevoGasto({ ...nuevoGasto, descripcion: e.target.value })}
        />
        <input
          type="number"
          placeholder="Monto"
          value={nuevoGasto.monto}
          onChange={(e) => setNuevoGasto({ ...nuevoGasto, monto: e.target.value })}
        />
        <button onClick={handleAgregarGasto}>Agregar</button>
      </div>
      <div>Total de gastos: ${totalGastos}</div>
    </div>
  );
};

export default Gastos;
