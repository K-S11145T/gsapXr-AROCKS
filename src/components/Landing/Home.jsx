import React, { useRef } from 'react'
import NavBar from '../Navbar/NavBar'
import CenterText from '../Center/CenterText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = (props) => {
  const home = useRef()
  const home2 = useRef()

  useGSAP(() => {
    gsap.to(home.current, {
      duration: 1.5,
      y:"-120%",
      delay: 1.5,
      rotate:0

    })
    gsap.from(home2.current , {
      opacity:0,
      duration: 2,
      y:30,
      delay:1.6,
      scale:1.05
    })
  })
  return (
    <div className='overflow-hidden'>
      <div ref={home} className='fixed scale-[120%] rotate-[10deg] z-[10] bg-black h-screen w-full'>

      </div>
      <div ref={home2} className='text-white h-screen w-full bg-cover bg-center bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)]'>
        <NavBar menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen} />
        <CenterText />
      </div>
    </div>
  )
}

export default Home
