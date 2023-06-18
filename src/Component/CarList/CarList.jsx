import React from 'react'
import './CarList.css'
import Car from '../../Component/Car/Car' 



function Carslist({ cars, priceStatus }) {


  const handlePricePlan = (planing) => {
    let List
    switch (planing) {
      
      case 'Cheap':
        List = cars
          .filter((e) => e.price.slice(1, -3) < 20000)
          .map((e) => <Car key={e.car_vin} car={e} />)
        return List
        break


      case 'Stand':
        List = cars
          .filter(
            (e) => e.price.slice(1, -3) > 20000 && e.price.slice(1, -3) < 40000
          )
          .map((e) => <Car key={e.car_vin} car={e} />)
        return List
        break


      case 'Lux':
        List = cars
          .filter((e) => e.price.slice(1, -3) > 40000)
          .map((e) => <Car key={e.car_vin} car={e} />)
        return List
        break

     case 'All' :
        List = cars.map((e) => <Car key={e.car_vin} car={e} />)
        return List
        break
    }
  }
  return (
    <>
    {handlePricePlan(priceStatus)}
    </>
  )
}

export default Carslist