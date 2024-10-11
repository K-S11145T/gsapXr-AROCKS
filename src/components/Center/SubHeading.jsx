import React from 'react'

const SubHeading = () => {
  return (
    <div className='flex mt-[2] px-5 w-full justify-between '>
      <div className='flex items-center gap-3'> 
        <div className='bg-transparent border-[1px] flex justify-center items-center border-white rounded-full w-[2.5vw] h-[2.5vw]'> <i class="ri-play-fill"></i> </div> 
        <h1 className=' text-xs leading-[2.5vh] text-start'>PLAY <br /> THE FILM</h1>
        </div>
      <div className='flex gap-5 justify-between '>
        <h1 className='leading-[2.5vh] text-xs text-start'>CREATOR <br />CURATOR</h1>
        <h1 className='leading-[2.5vh] text-xs text-start '>NEW YORK <br /> LOS ANGELES</h1>
      </div>
    </div>
  )
}

export default SubHeading
