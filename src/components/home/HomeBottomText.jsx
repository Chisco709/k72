import React, { useEffect, useRef, useState } from 'react'

const HomeBottomText = () => {
  const textRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (textRef.current) {
        const textWidth = textRef.current.scrollWidth
        const containerWidth = window.innerWidth
        const newScale = containerWidth / textWidth
        setScale(newScale)

        // centrado + ajuste manual hacia la derecha
        const newOffset = (containerWidth - textWidth * newScale) / 1.30 + 20 // 👈 cámbialo a tu gusto
        setOffset(newOffset)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 mb-2 overflow-hidden">
      <h1
        ref={textRef}
        className="uppercase leading-none tracking-tight whitespace-nowrap text-white"
        style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: '15vw', // 👈 más bajo que antes
          lineHeight: 1,
          transform: `translateX(${offset}px) scaleX(${scale})`,
          transformOrigin: 'left center'
        }}
      >
        RENE CHISCO
      </h1>
    </div>
  )
}

export default HomeBottomText
