import React from 'react'
import Image from 'next/image'
function CarListItems({car,distance}) {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center '>
            <div className='flex items-center gap-5'>
        <Image src={car.image} height={100} width={100}></Image>
        </div>
        <div>
            <h2 className=' text-xl font-semibold'>{car.name}</h2>
            <p>{car.desc}</p>
        </div>
        </div>
        <div className='pt-5 pr-6'>
        <h2 className=' text-lg font-semibold'>₹{(car.amount*distance).toFixed(2)}</h2>
        </div>

    </div>
  )
}

export default CarListItems