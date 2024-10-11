import React from 'react'
import Logo from '../Navbar/Logo'

const Menuright = (props) => {
  const menuClose =()=>{
    props.setmenuOpen(false)

  }
  return (
    <div className='w-1/3 flex flex-col px-5 justify-evenly text-white  '>
      <h1 onClick={menuClose} className='text-xs text-end hover:opacity-80 cursor-pointer'>CLOSE</h1>
      
      <Logo />

      <div className='text-3xl font-black'>
        <h1>ABOUT</h1>
        <h1>STORIES</h1>
        <h1>PROJECTS</h1>
        <h1>RELEASE</h1>
      </div>

      <div className='flex justify-between pr-10 text-[1.5vh]'> <h1>FOLLOW </h1>
      <h1>INSTAGRAM <br /> YOUTUBE</h1>
      </div>

      <div className='flex justify-between pr-10 text-[1.5vh]'><h1>LISTEN </h1>
      <h1>SPOTIFY<br /> MIXCLOUD</h1>
      </div>
      <div className='flex justify-between pr-10 text-[1.5vh]'><h1>GET IN TOUCH </h1>
      <h1>EMAIL</h1>
      </div>
    </div>
  )
}

export default Menuright
