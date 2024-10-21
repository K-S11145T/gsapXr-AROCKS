import React from 'react'

const SubHeading = () => {
  return (
    <div className='flex flex-col sm:flex-row mt-2 px-2 sm:px-5 w-full justify-between'>
      <div className='flex items-center gap-2 sm:gap-3 mb-2 sm:mb-0'> 
        <div className='bg-transparent border border-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center'>
          <i className="ri-play-fill text-sm sm:text-base"></i>
        </div> 
        <h1 className='text-xs sm:text-sm leading-tight text-start'>
          PLAY <br /> THE FILM
        </h1>
      </div>
      <div className='flex gap-3 sm:gap-5 justify-between'>
        <h1 className='text-xs sm:text-sm leading-tight text-start'>
          CREATOR <br />CURATOR
        </h1>
        <h1 className='text-xs sm:text-sm leading-tight text-start'>
          NEW YORK <br /> LOS ANGELES
        </h1>
      </div>
    </div>
  )
}

export default SubHeading
