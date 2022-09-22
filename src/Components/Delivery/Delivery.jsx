import React from 'react'
import Card from '../Card/Card'
import './Delivery.css'
import stationary from '../../Assets/Stationary3.jpg'
import book from '../../Assets/bookStore.jpg'
import medi from '../../Assets/medi1.png'
import fruits from '../../Assets/fruits.jpg'
import food from '../../Assets/food7.jpg'
import vege from '../../Assets/vege1.jpg'
import colddrink from '../../Assets/drink4.jpg'
import beer from '../../Assets/beer1.png'

function Delivery() {
    return (
        <>
            <div className='delivery-container'>
                <div className='delivery-heading'>
                    <h1>Delivery Options</h1>
                </div>
                <div className='delivery-product-container'>
                    <Card image={stationary} />
                    <Card image={book} />
                    <Card image={medi} />
                    <Card image={fruits} />
                    <Card image={vege} />
                    <Card image={food}/>
                    <Card image={colddrink}/>
                    <Card image={beer} />
                </div>
            </div>
        </>
    )
}

export default Delivery
