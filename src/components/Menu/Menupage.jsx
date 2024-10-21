import React, { useRef, useState, useEffect } from 'react'
import Menuleft from './Menuleft'
import Menuright from './Menuright'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Menupage = (props) => {
  const menuopen = useRef()
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

  useGSAP(() => {
    if (props.menuOpen) {
      gsap.to(menuopen.current, {
        top: "0%",
        rotate: 0,
        duration: isMobile ? 0.3 : 0.5,
        opacity: "100%"
      })
    } else {
      gsap.to(menuopen.current, {
        top: isMobile ? "120%" : "150%",
        rotate: isMobile ? 5 : 10,
        duration: isMobile ? 0.3 : 0.5,
        opacity: 0
      })
    }
  }, [props.menuOpen, isMobile])

  return (
    <div ref={menuopen} className={`flex z-[50] opacity-0 ${isMobile ? 'rotate-[5deg] top-[110%]' : 'rotate-[10deg] top-[120%]'} bg-zinc-900 fixed h-screen w-screen`}>
      <Menuleft />
      <Menuright menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen} />
    </div>
  )
}

export default Menupage
