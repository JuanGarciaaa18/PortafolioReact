import React from 'react'
import { ItemNavbar } from '../ItemNavbar/ItemNavbar'

export const Navbar = () => {
  return (
    
    <nav>
     
        <ul className='Menu'>
            <ItemNavbar Contenido="Home" to="/"/>
            <ItemNavbar Contenido="Technical Skills" to="/TechnicalSkills"/>
            <ItemNavbar Contenido="Social skills"  to="/SocialSkills"/>
            <ItemNavbar Contenido="Education" to="/Education"/>
            <ItemNavbar Contenido="Experiences"  to="/Experiences"/>
        </ul>
    </nav>
  )
}
