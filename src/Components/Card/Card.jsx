import React from 'react'
import './Card.css'

function Card({image, name}) {
  return (
    <>
        <div className='card'>
              <div className='card_image'>
                <img src={image}/>
              </div>
              <div className='card_title'>
                <p>{name}</p>
              </div>
        </div>
    </>
  )
}

export default Card