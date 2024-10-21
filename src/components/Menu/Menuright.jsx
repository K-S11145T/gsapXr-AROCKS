import React, { useState, useEffect } from 'react'
import Logo from '../Navbar/Logo'

const Menuright = (props) => {
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

  const menuClose = () => {
    props.setmenuOpen(false)
  }

  return (
    <div className={`${isMobile ? 'w-full' : 'w-1/3'} flex flex-col ${isMobile ? 'px-4' : 'px-5'} justify-evenly text-white`}>
      <h1 onClick={menuClose} className={`${isMobile ? 'text-sm' : 'text-xs'} text-end hover:opacity-80 cursor-pointer`}>CLOSE</h1>
      
      <Logo />

      <div className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-black`}>
        <h1 className="mb-2 cursor-pointer group">
          <span className="relative inline-block transition-all duration-300 group-hover:blur-[1px]">
            ABOUT
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h1>
        <h1 className="mb-2 cursor-pointer group">
          <span className="relative inline-block transition-all duration-300 group-hover:blur-[1px]">
            STORIES
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h1>
        <h1 className="mb-2 cursor-pointer group">
          <span className="relative inline-block transition-all duration-300 group-hover:blur-[1px]">
            PROJECTS
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h1>
        <h1 className="cursor-pointer group">
          <span className="relative inline-block transition-all duration-300 group-hover:blur-[1px]">
            RELEASE
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h1>
      </div>

      <div className={`flex justify-between ${isMobile ? 'pr-5' : 'pr-10'} ${isMobile ? 'text-sm' : 'text-[1.5vh]'}`}>
        <h1>FOLLOW</h1>
        <div>
          <h1>INSTAGRAM</h1>
          <h1>YOUTUBE</h1>
        </div>
      </div>

      <div className={`flex justify-between ${isMobile ? 'pr-5' : 'pr-10'} ${isMobile ? 'text-sm' : 'text-[1.5vh]'}`}>
        <h1>LISTEN</h1>
        <div>
          <h1>SPOTIFY</h1>
          <h1>MIXCLOUD</h1>
        </div>
      </div>

      <div className={`flex justify-between ${isMobile ? 'pr-5' : 'pr-10'} ${isMobile ? 'text-sm' : 'text-[1.5vh]'}`}>
        <h1>GET IN TOUCH</h1>
        <h1>EMAIL</h1>
      </div>
    </div>
  )
}

export default Menuright
