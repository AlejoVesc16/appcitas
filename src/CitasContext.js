// CitasContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const CitasContext = createContext();

export const CitasProvider = ({ children }) => {
  const [citas, setCitas] = useState([]);

  // Función para agregar una cita
  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  // Función para cargar citas desde localStorage al iniciar la aplicación
  useEffect(() => {
    const citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];
    console.log('Citas cargadas:', citasGuardadas);
    setCitas(citasGuardadas);
  }, []); // El segundo argumento es un array vacío para asegurarse de que se ejecute solo una vez al montar

  // Función para guardar citas en localStorage cada vez que se actualiza la lista de citas
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const value = { citas, agregarCita };

  return <CitasContext.Provider value={value}>{children}</CitasContext.Provider>;
};

export const useCitas = () => {
  const context = useContext(CitasContext);
  if (!context) {
    throw new Error('useCitas debe ser usado dentro de un CitasProvider');
  }
  return context;
};
