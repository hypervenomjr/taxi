import { CarListData } from '@/utils/CarListData';
import React, { useState } from 'react'
import CarListItems from './CarListItems';

function CarListOptions({distance}) {

    
  const[Activeindex,setActiveIndex] = useState();
  const[SelectedCar,setSelectedCar] = useState();

  return (
    <div className=' overflow-auto h-[300px]'>
        <h2 className='text-xl font-bold pt-3'>
        Recommended Rides
        </h2>
      {CarListData.map((item,index)=>(
        <div className={'cursor-pointer'}
         onClick={()=>{setActiveIndex(index);
          setSelectedCar(item);
         }}>
            <CarListItems car={item} distance={distance}></CarListItems>
        </div>
      ))}


        {SelectedCar?.name?
      <div className='flex justify-between fixed bottom-5  w-full md:w-[30%] bg-white p-3 shadow-xl border-[1px] items-center rounded-lg'>
        <h2>Make Payment for </h2>
     
            <button className='bg-black p-3 text-white rounded-lg text-center'>Request {SelectedCar.name}</button>
       
      </div>:null
}
    </div>  )
}

export default CarListOptions