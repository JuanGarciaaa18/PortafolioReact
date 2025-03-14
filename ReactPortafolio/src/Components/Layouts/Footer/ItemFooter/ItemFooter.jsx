import React from 'react'

export const ItemFooter = ({ imageUrl,linkUrl}) => {
  return (
    <>
      <li>
      <a href={linkUrl}> {imageUrl && <img src={imageUrl} alt="Item Footer" />} </a>
      </li>
    </>
  )
}