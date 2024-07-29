"use client"
import React, { useContext, useEffect, useState } from 'react'
import InputItem from './InputItem'
import { SourceContext } from '@/context/SourceContext';
import { DestinationContext } from '@/context/DestinationContext';
import CarListOptions from './CarListOptions';

function SearchSection() {
  const {source,setSource} = useContext(SourceContext);
  const {destination,setDestination} = useContext(DestinationContext);
  const [distance , setDistance] = useState();


  
const calculateDistance = ()=>{

  const pointA = new google.maps.LatLng(source.lat, source.lng);
  const pointB = new google.maps.LatLng(destination.lat, destination.lng);
  
  const dist = google.maps.geometry.spherical.computeDistanceBetween(pointA,pointB)

  setDistance(dist*0.001);
}

  return (
    <div>
    <div className='p-2 md:p-5 border-[2px] rounded-xl'>
    <p className='text-[20px] font-bold'>
        Get a ride
        </p>
        <InputItem type='source'></InputItem>  
        <InputItem type='Drop Location'></InputItem> 
        <button onClick={()=>{calculateDistance()}} className='p-3 m-3 bg-black rounded-lg w-full text-white'>Search</button> 
    </div>
      {distance?<CarListOptions distance={distance}></CarListOptions>:null}
    </div>
     )
}

export default SearchSection