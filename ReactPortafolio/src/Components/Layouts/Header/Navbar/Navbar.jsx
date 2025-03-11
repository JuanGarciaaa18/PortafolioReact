import React from 'react'
import { ItemNavbar } from '../ItemNavbar/ItemNavbar'
export const Navbar = () => {
  return (
    
    <nav>
     
        <ul className='Menu'>
            <ItemNavbar Contenido="Home"/>
            <ItemNavbar Contenido="Technical Skills"/>
            <ItemNavbar Contenido="Social skills"/>
            <ItemNavbar Contenido="Education"/>
            <ItemNavbar Contenido="Experiences"/>
        </ul>
    </nav>
  )
}
