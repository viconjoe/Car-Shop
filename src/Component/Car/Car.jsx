import React from 'react'
import './Car.css'

function Car({car}) {
    console.log()
    return (
        <div className='card'>
            <p className='cars'>Maker: {car.maker}</p>
            <p className='cars'>Model: {car.model}</p>
            <p className='cars'>Year: {car.year}</p>
            <p className='cars'>Country: {car.country}</p>
            <p className='cars'>Price: {parseInt(car.price.slice(1, 6))} €</p>
            <p className='cars'> car vin: {car.car_vin} </p>

        </div>
    )
}

export default Car