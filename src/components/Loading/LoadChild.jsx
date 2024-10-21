import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useEffect, useState } from 'react'

const LoadChild = () => {
  const load = useRef()
  const tl = gsap.timeline()
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

  useGSAP(() => {
    tl.to(load.current, {
      width: "100%",
      duration: windowSize.width <= 768 ? 1.5 : 2,
      delay: windowSize.width <= 768 ? 0.5 : 1,
      ease: "expo.out"
    })
      .to(load.current, {
        opacity: 0,
        duration: 0.5
      })
  }, [windowSize])

  return (
    <div ref={load} className='w-0 h-full bg-white sm:h-3/4 md:h-full'>
    </div>
  )
}

export default LoadChild
