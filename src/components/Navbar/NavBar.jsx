import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const NavBar = (props) => {
  return (
    <div className='flex justify-between items-center p-4'>
      <Logo />
      <Menu menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen} />
    </div>
  )
}

export default NavBar
