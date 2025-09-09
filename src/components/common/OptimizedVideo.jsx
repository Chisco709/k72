import React from 'react';
import { useVideoOptimization } from '../../hooks/useVideoOptimization';

/**
 * Componente de video optimizado con lazy loading y manejo de errores
 */
const OptimizedVideo = ({
  src,
  className = '',
  autoPlay = false,
  loop = false,
  muted = true,
  playsInline = true,
  preload = 'metadata',
  showLoadingIndicator = true,
  loadingIndicatorSize = 'md',
  onLoad,
  onError,
  onPlay,
  onPause,
  onEnded,
  children,
  ...props
}) => {
  const {
    isLoaded,
    isVisible,
    hasError,
    isPlaying,
    videoRef,
    containerRef,
    handleVideoLoad,
    handleVideoError,
    handleVideoPlay,
    handleVideoPause,
    handleVideoEnded,
  } = useVideoOptimization({
    preloadStrategy: preload,
  });

  // Combinar handlers personalizados con los del hook
  const handleLoad = (e) => {
    handleVideoLoad(e);
    onLoad?.(e);
  };

  const handleError = (e) => {
    handleVideoError(e);
    onError?.(e);
  };

  const handlePlay = (e) => {
    handleVideoPlay(e);
    onPlay?.(e);
  };

  const handlePause = (e) => {
    handleVideoPause(e);
    onPause?.(e);
  };

  const handleEnded = (e) => {
    handleVideoEnded(e);
    onEnded?.(e);
  };

  // Tamaños del indicador de carga
  const loadingSizes = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {isVisible && (
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          preload={preload}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={handleLoad}
          onError={handleError}
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
          {...props}
        >
          <source src={src} type="video/mp4" />
          {children}
        </video>
      )}

      {/* Indicador de carga */}
      {showLoadingIndicator && !isLoaded && isVisible && !hasError && (
        <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
          <div className={`animate-spin rounded-full border-b-2 border-white ${loadingSizes[loadingIndicatorSize]}`}></div>
        </div>
      )}

      {/* Indicador de error */}
      {hasError && (
        <div className="absolute inset-0 bg-red-900/50 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-2xl mb-2">⚠️</div>
            <div className="text-sm">Error cargando video</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedVideo;
