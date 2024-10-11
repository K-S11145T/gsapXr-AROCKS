import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const HeroText = () => {
  const text = useRef()
  useGSAP(()=>{
    gsap.from(text.current, {
      duration: 1.5,
      y:"100%",
      delay: 1.6,
      rotate:10

    })
  })
  return (
    <div className=' h-[57vh] w-[80vw] overflow-hidden'>
      <h1 ref={text} className='text-[22vw]  top-0 font-black'>AROCK</h1>
    </div>
  )
}

export default HeroText
