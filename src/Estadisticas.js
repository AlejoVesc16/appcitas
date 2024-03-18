import React, { useEffect, useState } from 'react';
import { useCitas } from './CitasContext';

const Estadisticas = () => {
  const { citas } = useCitas();
  const [gananciasDiarias, setGananciasDiarias] = useState({});
  const [gananciasSemanales, setGananciasSemanales] = useState({});

  useEffect(() => {
    // Calcula ganancias diarias y semanales
    const diarias = calcularGananciasDiarias(citas);
    const semanales = calcularGananciasSemanales(citas);

    // Actualiza el estado con los resultados
    setGananciasDiarias(diarias);
    setGananciasSemanales(semanales);
  }, [citas]);

  const calcularGananciasDiarias = (citas) => {
    const gananciasDiarias = {};

    citas.forEach((cita) => {
      const fecha = cita.fecha;
      const costo = cita.costo;

      if (!gananciasDiarias[fecha]) {
        gananciasDiarias[fecha] = 0;
      }

      gananciasDiarias[fecha] += costo;
    });

    return gananciasDiarias;
  };

  const calcularGananciasSemanales = (citas) => {
    const gananciasSemanales = {};

    citas.forEach((cita) => {
      const fecha = cita.fecha;
      const costo = cita.costo;
      const semana = obtenerNumeroSemana(new Date(fecha));

      if (!gananciasSemanales[semana]) {
        gananciasSemanales[semana] = 0;
      }

      gananciasSemanales[semana] += costo;
    });

    return gananciasSemanales;
  };

  const obtenerNumeroSemana = (fecha) => {
    const inicioAnio = new Date(fecha.getFullYear(), 0, 1);
    const diff = fecha - inicioAnio;
    const semana = Math.ceil(diff / (7 * 24 * 60 * 60 * 1000));
    return semana;
  };

  return (
    <div>
      <h2>Estadísticas</h2>
      <div>
        <h3>Ganancias Diarias</h3>
        <ul>
          {Object.entries(gananciasDiarias).map(([fecha, ganancia]) => (
            <li key={fecha}>
              {fecha}: {ganancia}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Ganancias Semanales</h3>
        <ul>
          {Object.entries(gananciasSemanales).map(([semana, ganancia]) => (
            <li key={semana}>
              Semana {semana}: {ganancia}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Estadisticas;
