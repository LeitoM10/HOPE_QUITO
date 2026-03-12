/**
 * Script de inicialización y funcionalidad para el componente Nosotros
 * Maneja animaciones, interacciones y comportamientos dinámicos
 */

// Variables globales para almacenar referencias a observers y listeners
let intersectionObserver = null;
let themeObserver = null;
let eventListeners = [];

// Función principal de inicialización
export function initNosotros() {
  console.log('Inicializando componente Nosotros...');
  
  // Obtener referencias a los elementos
  const nosotrosContainer = document.getElementById('nosotros-root');
  if (!nosotrosContainer) {
    console.warn('Contenedor de Nosotros no encontrado');
    return;
  }

  const missionSection = nosotrosContainer.querySelector('.mission-section');
  const visionSection = nosotrosContainer.querySelector('.vision-section');

  // Configurar observador de intersección para animaciones
  setupIntersectionObserver(missionSection, visionSection);

  // Configurar listeners para accesibilidad
  setupAccessibilityFeatures(missionSection, visionSection);

  // Configurar detección de cambio de tema
  setupThemeChangeDetection();
}

/**
 * Configura el Intersection Observer para animaciones al hacer scroll
 */
function setupIntersectionObserver(missionSection, visionSection) {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Agregar efecto de pulso al título cuando aparece
        const title = entry.target.querySelector('.section-title');
        if (title) {
          setTimeout(() => {
            title.classList.add('pulse-effect');
          }, 400);
        }
      }
    });
  }, observerOptions);

  if (missionSection) intersectionObserver.observe(missionSection);
  if (visionSection) intersectionObserver.observe(visionSection);
}

/**
 * Configura características de accesibilidad adicionales
 */
function setupAccessibilityFeatures(missionSection, visionSection) {
  // Hacer las secciones focusables para navegación por teclado
  if (missionSection) {
    missionSection.setAttribute('tabindex', '0');
  }
  if (visionSection) {
    visionSection.setAttribute('tabindex', '0');
  }

  // Agregar listeners para eventos de teclado
  const sections = [missionSection, visionSection].filter(Boolean);
  sections.forEach(section => {
    section.addEventListener('keydown', handleKeyboardNavigation);
    // Agregar efecto hover mejorado
    section.addEventListener('mouseenter', handleSectionHover);
    section.addEventListener('mouseleave', handleSectionLeave);
    // Guardar referencias para limpieza posterior
    eventListeners.push({ element: section, event: 'keydown', handler: handleKeyboardNavigation });
    eventListeners.push({ element: section, event: 'mouseenter', handler: handleSectionHover });
    eventListeners.push({ element: section, event: 'mouseleave', handler: handleSectionLeave });
  });
}

/**
 * Maneja la navegación por teclado
 */
function handleKeyboardNavigation(event) {
  // Enter o Space para expandir/contraer (funcionalidad futura)
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    // Agregar efecto visual al activar con teclado
    event.target.classList.add('keyboard-activated');
    setTimeout(() => {
      event.target.classList.remove('keyboard-activated');
    }, 300);
    console.log('Sección activada:', event.target.querySelector('.section-title')?.textContent);
  }
}

/**
 * Maneja el efecto hover en las secciones
 */
function handleSectionHover(event) {
  const section = event.currentTarget;
  section.classList.add('section-hover');
  
  // Agregar efecto de brillo al título
  const title = section.querySelector('.section-title');
  if (title) {
    title.classList.add('title-glow');
  }
}

/**
 * Maneja cuando el mouse sale de la sección
 */
function handleSectionLeave(event) {
  const section = event.currentTarget;
  section.classList.remove('section-hover');
  
  // Remover efecto de brillo del título
  const title = section.querySelector('.section-title');
  if (title) {
    title.classList.remove('title-glow');
  }
}

/**
 * Detecta cambios en el tema y ejecuta callbacks si es necesario
 */
function setupThemeChangeDetection() {
  // Observar cambios en el atributo data-theme del documento
  themeObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
        const newTheme = document.documentElement.getAttribute('data-theme');
        console.log('Tema cambiado a:', newTheme || 'dark (default)');
        // Aquí se pueden ejecutar acciones adicionales al cambiar el tema
      }
    });
  });

  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
}

/**
 * Función de limpieza (para cuando el componente se desmonte)
 */
export function cleanupNosotros() {
  console.log('Limpiando componente Nosotros...');
  
  // Desconectar Intersection Observer
  if (intersectionObserver) {
    intersectionObserver.disconnect();
    intersectionObserver = null;
  }
  
  // Desconectar Theme Observer
  if (themeObserver) {
    themeObserver.disconnect();
    themeObserver = null;
  }
  
  // Remover event listeners
  eventListeners.forEach(({ element, event, handler }) => {
    if (element) {
      element.removeEventListener(event, handler);
    }
  });
  eventListeners = [];
}

// Auto-inicialización si el DOM ya está listo
if (typeof document !== 'undefined' && document.readyState === 'complete') {
  initNosotros();
} else if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initNosotros);
}
