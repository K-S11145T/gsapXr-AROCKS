import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const LoadChild = () => {
  const load = useRef()
  const tl = gsap.timeline()
  useGSAP(() => {
    tl.to(load.current, {
      width: "100%",
      duration: 2,
      delay: 1,
      ease: "expo.out"
    })
      .to(load.current, {
        opacity: 0,

      })
  })
  return (
    <div ref={load} className='w-0 h-full bg-white'>
    </div>
  )
}

export default LoadChild
