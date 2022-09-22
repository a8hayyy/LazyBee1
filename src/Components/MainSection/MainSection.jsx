import React from 'react'
import './MainSection.css'
import mainImg from "../../Assets/pngegg.png"


function MainSection() {
  return (
    <div className='main-section-container'>
        <div className='main-text'>
            <h1>Bee Lazy, We'll get it done!</h1>
            <div className='steps-container'>
                <h3>- Get anything or everything delivered at your door steps</h3>
                <h3>- Create a list of items and share it on WhatsApp</h3>
            </div>
            <div className='button-container'>
            <button style={{backgroundColor:'#3f4f87'}}>Products</button>
            <button style={{backgroundColor:'#1a8d26'}}>Contact</button>
            </div>
        </div>
        <img src={mainImg}/>
    </div>
  )
}

export default MainSection