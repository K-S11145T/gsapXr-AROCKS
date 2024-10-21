import React, { useState, useEffect } from 'react'
import { Tilt } from '@jdion/tilt-react'

const Menuleft = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowSize.width <= 768

  return (
    <div className={`w-full md:w-2/3 h-full ${isMobile ? 'p-4' : 'p-14'}`}>
      <Tilt className='w-full relative h-full flex items-center justify-center' options={{ scale: isMobile ? 1 : 1.05, max: 5 }}>
        {[0.91, 0.94, 0.96, 0.99, 0.87, 0.90].map((scale, index) => (
          <img
            key={index}
            className={`absolute object-cover h-full w-full ${isMobile ? 'scale-100' : `scale-[${scale}]`}`}
            style={{ opacity: [0.5, 0.4, 0.2, 0.1, 0.8, 0.6][index] }}
            src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
            alt=""
          />
        ))}
      </Tilt>
    </div>
  )
}

export default Menuleft
