import React from 'react'
import { ItemFooter } from '../ItemFooter/ItemFooter'

export const NavFooter = () => {
  return (
    <nav>
      <ul className='Social-media'>
        <ItemFooter linkUrl="https://github.com/JuanGarciaaa18" imageUrl="./src/assets/icons/bxl-github.svg" />
        <ItemFooter linkUrl="https://www.instagram.com/j_garciaaa18/?hl=es" imageUrl="/src/assets/icons/bxl-instagram.svg" />
      </ul>
    </nav>
  )
}