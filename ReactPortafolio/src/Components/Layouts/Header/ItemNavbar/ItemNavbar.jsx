import React from 'react'
import { NavLink } from 'react-router-dom'
export const ItemNavbar = ({Contenido,to}) => {
  return (
    <>
    
            <li><NavLink to={to}>{Contenido}</NavLink></li>
            
    </>
  )
}
