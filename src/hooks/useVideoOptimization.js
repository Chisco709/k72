import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Hook personalizado para optimizar la carga y reproducción de videos
 * Incluye lazy loading, preload inteligente y manejo de errores
 */
export const useVideoOptimization = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    preloadStrategy = 'metadata', // 'none', 'metadata', 'auto'
    enableIntersectionObserver = true,
  } = options;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (!enableIntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      },
      { 
        threshold,
        rootMargin,
      }
    );

    observerRef.current = observer;

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, enableIntersectionObserver]);

  // Cargar video cuando sea visible
  useEffect(() => {
    if (isVisible && videoRef.current && preloadStrategy !== 'none') {
      videoRef.current.load();
    }
  }, [isVisible, preloadStrategy]);

  // Event handlers
  const handleVideoLoad = useCallback(() => {
    setIsLoaded(true);
    setHasError(false);
  }, []);

  const handleVideoError = useCallback((error) => {
    console.error('Error cargando el video:', error);
    setHasError(true);
    setIsLoaded(false);
  }, []);

  const handleVideoPlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handleVideoPause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleVideoEnded = useCallback(() => {
    setIsPlaying(false);
  }, []);

  // Métodos de control
  const play = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const pause = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        pause();
      } else {
        play();
      }
    }
  }, [isPlaying, play, pause]);

  return {
    // Estados
    isLoaded,
    isVisible,
    hasError,
    isPlaying,
    
    // Refs
    videoRef,
    containerRef,
    
    // Event handlers
    handleVideoLoad,
    handleVideoError,
    handleVideoPlay,
    handleVideoPause,
    handleVideoEnded,
    
    // Métodos de control
    play,
    pause,
    togglePlay,
  };
};
