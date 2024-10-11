import React from 'react'

const Menu = (props) => {
  const menuOpenFunc = ()=>{
    props.setmenuOpen(true)
    console.log(props.menuOpen)

  }
  return (
    <div>
      <h1 onClick={menuOpenFunc} className='text-xs hover:opacity-80 cursor-pointer'>MENU</h1>
    </div>
  )
}

export default Menu
