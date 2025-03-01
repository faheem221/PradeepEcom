import React from 'react'
import Logo from '../App chunks/Logo'
import Menu from '../App chunks/Menu'
const Header = () => {
  return (
    <div className='container py-3 flex justify-between items-center'>
        <Logo />
        <Menu />
    </div>
  )
}

export default Header