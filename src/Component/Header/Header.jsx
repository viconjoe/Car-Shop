import React from 'react'
import './Header.css'

function Header({name}) {
  return (
    <div>
      <div className='header'>{name}</div>
      < img className='reboot-logo' src= {''} />
    </div>
  )
}

export default Header