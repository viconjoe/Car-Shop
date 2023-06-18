import './App.css'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Car from './Component/Car/Car'
import cars from './assets/cars.json'
import CarList from './Component/CarList/CarList'
import {useState} from 'react'

function App() {
   const [pricePlan, setPricePlan] = useState('All')
   const selectPricePlan = (plan) => {
    const plans=['All','Cheap', 'Stand','Lux']
    return plans.map((e) => {
    return <option value={e}>{e}</option>
  })
 }

  return (
    <>
      <div>
      
        <div className="header">
          <Header name='Reboot Car Store'/>
        </div>

        <div className='search'>
          <label>
            <h3 className="select">Select your price plan</h3>
          </label>

          <select className='botton'
            value={pricePlan}
            onChange={(e) => {

              setPricePlan(e.target.value)
            }}
          >
            {selectPricePlan(pricePlan)}

          </select>
        </div>

        <div className='carsMenu'>
          <CarList cars={cars} priceStatus={pricePlan}/>
        </div>

        <div className='footer'>
          <Footer name='Reboot Car Store - (c) All rights reserved.'/>
        </div>

      </div>


    </>
  )
}

export default App
