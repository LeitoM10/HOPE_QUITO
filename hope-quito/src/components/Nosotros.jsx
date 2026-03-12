import React, { useEffect } from 'react';
import '../styles/nosotros.css';

const Nosotros = () => {
  useEffect(() => {
    // Importar y ejecutar el script de inicialización
    let cleanup;
    import('../scripts/nosotros-script.js').then(module => {
      if (module.initNosotros) {
        module.initNosotros();
      }
      cleanup = module.cleanupNosotros;
    });

    // Función de limpieza cuando el componente se desmonte
    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  return (
    <div className="nosotros-container" id="nosotros-root">
      <h1 className="nosotros-title">Nosotros</h1>
      
      <section className="mission-section" aria-labelledby="mission-title">
        <h2 id="mission-title" className="section-title">Misión</h2>
        <p className="section-content">
          En Hope Quito, nos dedicamos a transformar vidas a través de la educación, el apoyo comunitario y el desarrollo integral. Trabajamos incansablemente para brindar oportunidades a quienes más lo necesitan, construyendo puentes de esperanza y dignidad en nuestra comunidad.
        </p>
      </section>

      <section className="vision-section" aria-labelledby="vision-title">
        <h2 id="vision-title" className="section-title">Visión</h2>
        <p className="section-content">
          Aspiramos a ser una organización líder en el desarrollo social de Quito, reconocida por nuestro impacto positivo y sostenible. Visualizamos una comunidad donde cada persona tenga acceso a las herramientas necesarias para alcanzar su máximo potencial y contribuir al bienestar colectivo.
        </p>
      </section>
    </div>
  );
};

export default Nosotros;