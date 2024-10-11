import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import LoadParent from './components/Loading/LoadParent'
import Home from './components/Landing/Home'
import Menupage from './components/Menu/Menupage'

const App = () => {

const [menuOpen, setmenuOpen] = useState(false)
  return (
    <div className='bg-black  h-screen w-full'>
      <Menupage menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <LoadParent />
      <Home menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
    </div>
  )
}

export default App
