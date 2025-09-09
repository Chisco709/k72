/**
 * Utilidades para optimización de rendimiento
 */

// Debounce function para optimizar eventos
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function para limitar la frecuencia de ejecución
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Preload de recursos críticos
export const preloadResource = (href, as = 'image') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (as === 'font') {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
};

// Preload de videos
export const preloadVideo = (src) => {
  const video = document.createElement('video');
  video.preload = 'metadata';
  video.src = src;
  video.load();
};

// Lazy load de imágenes
export const lazyLoadImage = (img, src) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = src;
        image.classList.remove('lazy');
        observer.unobserve(image);
      }
    });
  });
  
  observer.observe(img);
};

// Optimización de scroll
export const optimizeScroll = (callback, delay = 16) => {
  let ticking = false;
  
  const update = () => {
    callback();
    ticking = false;
  };
  
  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  };
  
  return requestTick;
};

// Medición de rendimiento
export const measurePerformance = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
  return result;
};

// Verificar si el dispositivo es móvil
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Verificar conexión lenta
export const isSlowConnection = () => {
  return navigator.connection && 
         (navigator.connection.effectiveType === 'slow-2g' || 
          navigator.connection.effectiveType === '2g');
};

// Configuración de calidad de video basada en conexión
export const getVideoQuality = () => {
  if (isSlowConnection()) {
    return {
      preload: 'none',
      quality: 'low'
    };
  }
  
  if (isMobile()) {
    return {
      preload: 'metadata',
      quality: 'medium'
    };
  }
  
  return {
    preload: 'metadata',
    quality: 'high'
  };
};
