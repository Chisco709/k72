import React from 'react'

/**
 * Logo: SVG con texto. 
 * props:
 *  - width: number|string (px o %) -> ajuste externo (ej. '160px' o '12rem' o '100%')
 *  - fill: color del texto
 */
const Logo = ({ width = '160px', fill = '#E8EAFA' }) => {
  return (
    <svg
      width={width}
      height="auto"
      viewBox="0 0 600 100"
      preserveAspectRatio="xMinYMin meet" // asegura alineación top-left cuando se usa en contenedor
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <title>René Chisco</title>
      <text
        x="0"
        y="78"                        // baseline vertical dentro del viewBox
        fill={fill}
        fontFamily="'Anton', sans-serif"
        fontSize="72"                 // escala dentro del viewBox; el svg escalado por width
        fontWeight="400"
        letterSpacing="4"             // espaciado entre letras; ajusta si hace falta
        textRendering="geometricPrecision"
      >
        RENE CHISCO
      </text>
    </svg>
  )
}

export default Logo
