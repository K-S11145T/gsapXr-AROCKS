import React from 'react'
import LoadChild from './LoadChild'

const LoadParent = () => {
  return (
    <div className='bg-transparent fixed z-[50] w-full h-[2px]'>
      <LoadChild />
    </div>
  )
}

export default LoadParent
