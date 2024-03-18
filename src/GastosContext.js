import React, { createContext, useContext, useState } from 'react';

const GastosContext = createContext();

export const useGastosContext = () => useContext(GastosContext);

export const GastosProvider = ({ children }) => {
  const [gastos, setGastos] = useState([]);
  const [totalGastos, setTotalGastos] = useState(0);

  const agregarGasto = (nuevoGasto) => {
    setGastos([...gastos, nuevoGasto]);
    setTotalGastos(totalGastos + nuevoGasto.monto);
  };

  const quitarGasto = (index) => {
    const gastoEliminado = gastos[index].monto;
    const nuevosGastos = gastos.filter((_, i) => i !== index);
    setGastos(nuevosGastos);
    setTotalGastos(totalGastos - gastoEliminado);
  };

  return (
    <GastosContext.Provider value={{ gastos, totalGastos, agregarGasto, quitarGasto }}>
      {children}
    </GastosContext.Provider>
  );
};
