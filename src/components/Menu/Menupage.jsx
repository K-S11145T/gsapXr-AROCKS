import React, { useRef } from 'react'
import Menuleft from './Menuleft'
import Menuright from './Menuright'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Menupage = (props) => {
  const menuopen = useRef()
  useGSAP(()=>{
    if(props.menuOpen){
      gsap.to(menuopen.current, {
        top:"0%",
        rotate:0,
        duration:0.5,
        opacity:"100%"
                
      })
    }else{
      gsap.to(menuopen.current, {
        top:"150%",
        rotate:10,
        duration:0.5,
        opacity:0
                
      })

    }
    
  } , [props.menuOpen])
  return (
    <div ref={menuopen} className=' flex z-[50] opacity-0 rotate-[10deg] top-[120%] bg-zinc-900 fixed h-screen w-screen'>
      <Menuleft />
      <Menuright menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen} />
    </div>
  )
}

export default Menupage
