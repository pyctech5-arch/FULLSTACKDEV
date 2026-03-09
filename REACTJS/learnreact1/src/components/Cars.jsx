import React from 'react'
import { Suspense } from 'react'
const Cars = () => {
 const cars=["volvo",'indigo','fortuner','ertiga']
    return (
    <div>
  <h2>My favorite cars</h2>
<ul>
    {cars.map((car,index)=>(
           <li key={index}>{car}</li>
 ))  }
</ul>
    </div>
  )
}

export default Cars
